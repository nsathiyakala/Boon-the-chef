const nodemailer = require('nodemailer');
require("dotenv").config()

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.MAIL_ID,
    pass: process.env.MAIL_PASS,
  },
});

exports.sendEmail = async (req, res) => {
  const { buyerEmail, sellerEmail, orderDetails } = req.body;

  const mailOptions = {
    from: process.env.MAIL_ID,
    to: buyerEmail,
    subject: 'Order Confirmation',
    text:`
    Dear Customer,

    Thank you for your order! Here are your order details:

    ${orderDetails.cartItems.map(item => `
    Product Name: ${item.product.name}
    Quantity: ${item.quantity}`).join('\n')}

    Refund Policy:
    If you are not completely satisfied with your purchase, you can return the product within 30 days of receipt for a full refund. For more details, please visit our [Refund Policy](http://localhost:3001/refundpolicy).
    Privacy Policy:
    We value your privacy. For more information, please read our [Privacy Policy](http://localhost:3001/privacy-policy).
    Terms and Conditions:
    By making this purchase, you agree to our [Terms and Conditions](http://localhost:3001/terms&conditions).
    We appreciate your business and hope you enjoy your purchase.

    Best regards,
    Boon The Chef
  `
  };

  const sellerMailOptions = {
    from: process.env.MAIL_ID,
    to: sellerEmail,
    subject: 'New Order Received',
    text:`

    A new order has been placed. Here are the order details:

    PRODUCT DETAILS:
    ${orderDetails.cartItems.map(item => `
    Product Name: ${item.product.name}
    Quantity: ${item.quantity}
    ₹${orderDetails.total} Payment Successfull
    `).join('\n')}

    CUSTOMER DETAILS:
    Customer Name:${orderDetails.shippingDetails.fullName},
    Customer Phone Number: ${orderDetails.shippingDetails.phoneNumber}
    Customer Mail Id: ${orderDetails.shippingDetails.email}

    DELIVERY ADDRESS: 
    ${orderDetails.shippingDetails.address}, ${orderDetails.shippingDetails.city}, ${orderDetails.shippingDetails.state} ${orderDetails.shippingDetails.zipCode}, ${orderDetails.shippingDetails.country}

    Please ensure the order is processed and shipped promptly.
  `
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
