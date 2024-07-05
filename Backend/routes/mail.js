const express = require('express');
const router = express.Router();
const { sendEmail } = require('../controller/mailContoller');

router.post('/send-email', sendEmail);

module.exports = router