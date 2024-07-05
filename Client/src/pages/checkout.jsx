import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { shippingDetails, cartItems } = location.state || {};

  if (!shippingDetails || !cartItems) {
    return <p>Error: Missing information</p>;
  }

  const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handlePaymentSuccess = async (paymentDetails) => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          buyerEmail: shippingDetails.email, // Assuming email is part of shippingDetails
          sellerEmail: 'seller@example.com', // Replace with actual seller's email
          checkoutDetails: { shippingDetails, cartItems, paymentDetails },
          paymentStatus: 'Success',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send emails');
      }

      const result = await response.json();
      console.log('Emails sent successfully:', result);
      navigate('/order-success');
    } catch (error) {
      console.error('Error sending emails:', error);
      // Handle error
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_OXYGhEnON13iER',
      key_secret: "J9wzb19hWFmpUbrRGvQkVBp7",
      amount: total * 100, // Razorpay accepts amount in paise
      currency: 'INR',
      name: 'Boon The Chef',
      description: 'testing purpose',
      image: 'https://example.com/your_logo',
      handler: function (response) {
        console.log(response);
        handlePaymentSuccess(response);
      },
      prefill: {
        name: shippingDetails.fullName,
        email: shippingDetails.email,
        contact: shippingDetails.phoneNumber,
      },
      notes: {
        address: shippingDetails.address,
      },
      theme: {
        color: '#fff',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="checkout-page" >
      <div className='container-fluid about' style={{ border: "height:100px !important" }}>
        <h1>Checkout page</h1>
      </div>
      <div className='container' style={{ border: "1px solid red" }}>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="row">
            <div className="col-lg-8">
              {cartItems.map((item) => (
                <div key={item.product._id} className="cart-item">
                  <img src={item.product.images[0].image} alt="Product" />
                  <p>{item.product.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.product.price}</p>
                </div>
              ))}
              <h4>Total: ${total.toFixed(2)}</h4>
            </div>
            
            <div className="col-lg-4">
            <div className="shipping-details">
              <h3>Shipping Information</h3>
              <p>{shippingDetails.fullName}</p>
              <p>{shippingDetails.address}</p>
              <p>{shippingDetails.city}, {shippingDetails.state} {shippingDetails.zipCode}</p>
              <p>{shippingDetails.country}</p>
              <p>{shippingDetails.phoneNumber}</p>
            </div>
              <button className="btn btn-black" onClick={handlePayment}>
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>




      </div>

    </div>
  );
};

export default Checkout;
