const express = require('express')
const {
  getReqExams, 
  getReqExam, 
  createReqExam, 
  deleteReqExam, 
  updateReqExam,
  createReqExam_dummy
} = require('../controllers/ReqExamController')

const router = express.Router()

router.get('/createReqExam_dummy', createReqExam_dummy);

// GET all ReqExams
router.get('/', getReqExams)

// GET a single ReqExam
router.get('/:id', getReqExam)

// POST a new ReqExam
router.post('/', createReqExam)

// DELETE a ReqExam
router.delete('/:id', deleteReqExam)

// UPDATE a ReqExam
router.patch('/:id', updateReqExam)




module.exports = router