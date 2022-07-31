const express = require('express')

// controller functions
const { getUserState,getExamReq } = require('../controllers/valController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router()
router.use(requireAuth)

//router for getting user state and requireAuth is used to check if user is logged in
router.get('/userState', getUserState);
router.get('/getExamReq', getExamReq);



module.exports = router