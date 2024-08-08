import React, { Fragment, useState } from 'react';
import { useLocation , Link} from 'react-router-dom';


const Checkout = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  const { shippingDetails, cartItems } = location.state || {};

  const [ordersucess, setOrdersucess] = useState(false)

  if (!shippingDetails || !cartItems) {
    return <p>Error: Missing information</p>;
  }

  const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

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
      image: 'https://example.com/your_logo',
      handler: function (response) {
        console.log(response);
        setOrdersucess(true)
        sendEmail(shippingDetails, cartItems, total);
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

  const sendEmail = async (shippingDetails, cartItems, total) => {
    const orderDetails = {
      shippingDetails,
      cartItems,
      total,
    };

    try {
      const response = await fetch('http://localhost:8000/boonthechef/send-email', {
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
        // setOrdersucess(true)
        alert('Order Received');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="checkout-page">
      <div className='container-fluid about'>
        <h1>Checkout page</h1>
      </div>
      <div className='container'>
        {
          !ordersucess ?
            <Fragment>
              <div className="order-summary">
                <h3>Order Summary</h3>
                <div className="row">
                  <div className="col-lg-8">

                    {cartItems.map((item) => (
                      <div key={item.product._id} className="cart-item row">
                        <div className="col-3">
                          <img src={item.product.images[0].image} alt="Product" className="product-image" />
                        </div>
                        <div className="col-9">
                          <p>{item.product.name}</p>
                          <p>Quantity: {item.quantity}</p>
                          <p>Price: ${item.product.price}</p>
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
            </Fragment>
            : <Fragment>

              <div className='d-flex flex-column  align-item-center justify-content-center text-center' style={{ height: "200px" }} >
                <h4 style={{ fontWeight: "700" }}>Order Successfull !</h4>
                <p style={{ fontSize: "13px" }}>You'll be Received Our Mail</p>
                {/* <button className="btn btn-black btn-block" > */}
                  <Link to={"/products"} >Continue Shopping</Link>
                {/* </button> */}
              </div>

            </Fragment>

        }



      </div>

    </div>
  );
};

export default Checkout;
