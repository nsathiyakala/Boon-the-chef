const nodemailer = require('nodemailer');

// Replace with your email sending configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sathiyakalavirtue@gmail.com',
    pass: 'Sat@3002'
  }
});

exports.sendEmailToBuyer = async (buyerEmail, checkoutDetails) => {
  try {
    await transporter.sendMail({
      from: 'sathiyakalavirtue@gmail.com',
      to: buyerEmail,
      subject: 'Order Confirmation',
      html: `<p>Thank you for your order! Here are your details:<br>${JSON.stringify(checkoutDetails)}</p>`
    });
    console.log('Email sent to buyer:', buyerEmail);
  } catch (error) {
    console.error('Error sending email to buyer:', error);
    throw error;
  }
};

exports.sendEmailToSeller = async (sellerEmail, checkoutDetails) => {
  try {
    await transporter.sendMail({
      from: 'sathiyakalavirtue@gmail.com',
      to: sellerEmail,
      subject: 'New Order Notification',
      html: `<p>You have received a new order! Here are the details:<br>${JSON.stringify(checkoutDetails)}</p>`
    });
    console.log('Email sent to seller:', sellerEmail);
  } catch (error) {
    console.error('Error sending email to seller:', error);
    throw error;
  }
};
