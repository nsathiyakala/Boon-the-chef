const express = require('express');
const router = express.Router();
const orderConfirmController = require('../controller/orderConfirmController');

// POST /api/sendEmail
router.post('/sendEmail', orderConfirmController.sendEmails);

module.exports = router;
