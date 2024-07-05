const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'sathiyakalavirtue@gmail.com',
    pass: 'Sat@3002',
  },
});

exports.sendEmail = async (req, res) => {
  const { buyerEmail, sellerEmail, orderDetails } = req.body;

  const mailOptions = {
    from: 'sathiyakalavirtue@gmail.com',
    to: buyerEmail,
    subject: 'Order Confirmation',
    text: `Order Details: ${JSON.stringify(orderDetails, null, 2)}`,
  };

  const sellerMailOptions = {
    from: 'sathiyakalavirtue@gmail.com',
    to: sellerEmail,
    subject: 'New Order Received',
    text: `Order Details: ${JSON.stringify(orderDetails, null, 2)}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(sellerMailOptions);
    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send emails' });
  }
};
