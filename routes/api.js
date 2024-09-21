const express = require('express');
const router = express.Router();
const {addUser,getUserData} = require('../controller/User')
const {upload} = require('../config/cloudinary')

router.post('/users', upload.array('images', 5),addUser);

router.get('/users',getUserData);

module.exports = router;