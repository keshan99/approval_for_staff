const express = require('express')
const {
  getReqExams, 
  getReqExam, 
  createOneReqExam, 
  deleteReqExam, 
  updateReqExam,
  createReqExam_dummy,
  insertMultipleReqExams,
  changeEamReqStatus,
} = require('../controllers/ReqExamController')

const requireAuth = require("../middleware/requireAuth");
const router = express.Router();
router.use(requireAuth);


router.get('/createReqExam_dummy', createReqExam_dummy);

// GET all ReqExams
router.get('/', getReqExams)

// GET a single ReqExam
router.get('/:id', getReqExam)

// POST a new ReqExam
router.post('/', createOneReqExam)

// DELETE a ReqExam
router.delete('/:id', deleteReqExam)

// UPDATE a ReqExam
router.patch('/:id', updateReqExam)

// POST multiple ReqExams
router.post('/insertReqExams', insertMultipleReqExams);

// SET exam request status
router.post('/setExamReqStatus', changeEamReqStatus);



module.exports = router