const express = require('express');
const router = express.Router();
const { sendEmail, sendEmail1 } = require('../controller/mailContoller');
// const { sendComboEmail } = require('../controller/comboMailController');

router.post('/send-email', sendEmail);
router.post('/sendEmail',sendEmail1)

module.exports = router