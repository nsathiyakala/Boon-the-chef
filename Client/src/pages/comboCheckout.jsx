import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ComboCheckout = ({orderSuccess,setOrderSuccess,setCartItems}) => {
  const location = useLocation();
  const { shippingDetails, selectedProduct } = location.state || {};
  if (!shippingDetails || !selectedProduct) {
    return <p>Error: Missing information</p>;
  }
  
  const total = selectedProduct.reduce((acc, item) => acc + item.price * item.quantity, 0);

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
      amount: total * 100, 
      currency: 'INR',
      name: 'Boon The Chef',
      description: 'testing purpose',
      handler: function (response) {
        console.log(response);
        setOrderSuccess(true);
        setCartItems([]);
        sendEmail(shippingDetails, selectedProduct, total);

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

  const sendEmail = async (shippingDetails, selectedProduct, total) => {
    const orderDetails = {
      shippingDetails,
      selectedProduct,
      total,
    };
    console.log(orderDetails);
    try {
      const response = await fetch('http://localhost:8000/boonthechef/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          buyerEmail: shippingDetails.email,
          sellerEmail: 'sathiyakalavirtue@gmail.com',
          orderDetails,
        }),
      });

      if (response.ok) {
        alert('Order Received');
      } else {
        alert('There is a Server Error, Failed to Receive Order please Contact Our Team');
      }
    } catch (error) {
      console.error('Error sending email:', error.message);
     
    }
  };


  return (
    <div className="checkout-page">
      <div className='container-fluid about'>
        <h1>Checkout Page</h1>
      </div>
      <div className='container'>
        {!orderSuccess ? (
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="row">
              <div className="col-lg-8">
                {selectedProduct.map((item) => (
                  <div key={item._id} className="cart-item row">
                    <div className="col-3">
                      <img src={item.images[0].image} alt="Product" className="product-image" />
                    </div>
                    <div className="col-9">
                      <p>{item.name}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ${item.price}</p>
                    </div>
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
        ) : (
          <div className='d-flex flex-column align-items-center justify-content-center text-center' style={{ height: "200px" }}>
            <h4 style={{ fontWeight: "700" }}>Order Successful!</h4>
            <p style={{ fontSize: "13px" }}>You'll receive an email confirmation shortly.</p>
            <Link to={"/comboproducts"}>Continue Shopping</Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default ComboCheckout;
