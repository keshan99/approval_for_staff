const ReqExam = require('../models/ReqExamModel')
const mongoose = require('mongoose')

// get all ReqExams
const getReqExams = async (req, res) => {
  const ReqExams = await ReqExam.find({}).sort({createdAt: -1})

  res.status(200).json(ReqExams)
}

// get a single ReqExam
const getReqExam = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such ReqExam'})
  }

  const ReqExam = await ReqExam.findById(id)

  if (!ReqExam) {
    return res.status(404).json({error: 'No such ReqExam'})
  }

  res.status(200).json(ReqExam)
}

// create a new ReqExam
const createReqExam = async (req, res) => {
  const {student_ID,subject_ID, attendance,lab_attendance, accept} = req.body

  let emptyFields = []

  if (!student_ID) {
    emptyFields.push('student_ID')
  }
  if (!subject_ID) {
    emptyFields.push('subject_ID')
  }
  if (!attendance) {
    emptyFields.push('attendance')
  }
  if (!lab_attendance) {
    emptyFields.push('lab_attendance')
  }
  if (!accept) {
    emptyFields.push('accept')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
    const ReqExam = await ReqExam.create({student_ID,subject_ID, attendance,lab_attendance, accept} )
    res.status(200).json(ReqExam)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a ReqExam
const deleteReqExam = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such ReqExam'})
  }

  const ReqExam = await ReqExam.findOneAndDelete({_id: id})

  if(!ReqExam) {
    return res.status(400).json({error: 'No such ReqExam'})
  }

  res.status(200).json(ReqExam)
}

// update a ReqExam
const updateReqExam = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such ReqExam'})
  }

  const ReqExam = await ReqExam.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!ReqExam) {
    return res.status(400).json({error: 'No such ReqExam'})
  }

  res.status(200).json(ReqExam)
}

module.exports = {
  getReqExams,
  getReqExam,
  createReqExam,
  deleteReqExam,
  updateReqExam
}