const emailService = require('../services/emailservices');

exports.sendEmails = async (req, res) => {
  const { buyerEmail, sellerEmail, checkoutDetails, paymentStatus } = req.body;

  try {
    await emailService.sendEmailToBuyer(buyerEmail, checkoutDetails);
    await emailService.sendEmailToSeller(sellerEmail, checkoutDetails);

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ error: 'Failed to send emails' });
  }
};
