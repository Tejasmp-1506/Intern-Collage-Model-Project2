const express = require('express');
const { Router } = require('express');
const collageController = require('../Controller/collageController')
const internController = require('../Controller/internController')
const router = express.Router();

// const collegeModel = require('../Models/collegeModel')

router.post("/functionup/collages", collageController.Collage) 

router.post("/functionup/interns", internController.Intern)

router.get('/functionup/:name', internController.getDetail)




module.exports = router;