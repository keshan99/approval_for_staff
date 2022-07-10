const express = require('express')
const {
  getSubjects, 
  getSubject, 
  createSubject, 
  createSubject,
  deleteSubject, 
  updateSubject
} = require('../controllers/SubjectController')

const router = express.Router()

// GET all Subjects
router.get('/', getSubjects)

// GET a single Subject
router.get('/:id', getSubject)

// POST a new Subject
router.post('/', createSubject)

// DELETE a Subject
router.delete('/:id', deleteSubject)

// UPDATE a Subject
router.patch('/:id', updateSubject)

module.exports = router