const express = require('express');
const router = express.Router();
const { sendEmail } = require('../controller/mailContoller');
// const { sendComboEmail } = require('../controller/comboMailController');

router.post('/send-email', sendEmail);
// router.post('/sendEmail',sendComboEmail)

module.exports = router