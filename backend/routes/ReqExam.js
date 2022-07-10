const express = require('express')
const {
  getReqExams, 
  getReqExam, 
  createReqExam, 
  createReqExam_dummy,
  deleteReqExam, 
  updateReqExam
} = require('../controllers/ReqExamController')

const router = express.Router()

// GET all ReqExams
router.get('/', getReqExams)

// GET a single ReqExam
router.get('/:id', getReqExam)

// POST a new ReqExam
router.post('/', createReqExam_dummy)

// DELETE a ReqExam
router.delete('/:id', deleteReqExam)

// UPDATE a ReqExam
router.patch('/:id', updateReqExam)

module.exports = router