import React from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const { shippingDetails, cartItems } = location.state || {};

  if (!shippingDetails || !cartItems) {
    return <p>Error: Missing information</p>;
  }

  const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="shipping-details">
        <h3>Shipping Information</h3>
        <p>{shippingDetails.fullName}</p>
        <p>{shippingDetails.address}</p>
        <p>{shippingDetails.city}, {shippingDetails.state} {shippingDetails.zipCode}</p>
        <p>{shippingDetails.country}</p>
        <p>{shippingDetails.phoneNumber}</p>
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
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
      <button className="btn btn-black">Proceed to Payment</button>
    </div>
  );
};

export default Checkout;
