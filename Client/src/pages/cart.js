import React, { Fragment, useState } from "react";

import { Link } from "react-router-dom";

export default function Cart({ cartItems, setCartItems }) {
  const handleQuantityChange = (productId, quantity) => {
    const updatedCartItems = cartItems.map(item =>
      item.product._id === productId ? { ...item, quantity: parseInt(quantity) } : item
    );
    setCartItems(updatedCartItems);
  };

  const removeItem = (productId) => {
    const updatedCartItems = cartItems.filter(item =>
      item.product._id !== productId
    );
    setCartItems(updatedCartItems);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  console.log(total);

  const [complete, setComplete] = useState(false)


  return (
    cartItems.length > 0 ?
      <Fragment>
        <div className="container mt-4">
          <h2 className="text-center mb-4">Your Cart: {cartItems.length}</h2>
          <div className="row">
            <div className="col-lg-9">
              {cartItems.map((item) => (
                <Fragment key={item.product._id}>
                  <hr />
                  <div className="cart-item container">
                    <div className="row ">
                      <div className="col-4 col-lg-3">
                        <img src={item.product.images[0].image} alt="Product" className="img-fluid" />
                      </div>
                      <div className="col-7 col-lg-5">
                        <Link to={`/product/${item.product._id}`} className="text-decoration-none" style={{ fontSize: "18px", color: 'black', fontWeight: '400' }}>{item.product.name}</Link>
                        <div className="ratings mt-2" style={{ fontSize: "10px" }}>
                          {/* Rating icons */}
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-half-o"></i>
                          <i className="fa fa-star-o"></i>
                          <p id="card_item_price" className="mt-3" style={{ fontSize: "20px" }}>${item.product.price}</p>
                        </div>
                      </div>


                      <div className="col-4 col-lg-2  order-4 order-lg-2 " >
                        <div className="stockCounter d-flex align-items-center">
                          <button
                            className="btn btn-black minus"
                            onClick={() => handleQuantityChange(item.product._id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >-</button>
                          <input
                            type="number"
                            className="form-control count mx-2"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.product._id, e.target.value)}
                            min={1}
                          />
                          <button
                            className="btn btn-black plus"
                            onClick={() => handleQuantityChange(item.product._id, item.quantity + 1)}
                          >+</button>
                        </div>
                      </div>
                      <div className="col-4 col-lg-1 order-3" ></div>
                      <div className="col-1 order-2 order-lg-4 p-0 text-end">
                        <i
                          className="fa fa-times-circle close-icon btn"
                          onClick={() => removeItem(item.product._id)}
                        ></i>
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
            <div className="col-lg-3">
              <div className="order-summary">
                <h4 className="mb-4">Order Summary</h4>
                <hr />
                <p>Subtotal: <span className="order-summary-values">{subtotal} (Units)</span></p>
                <p>Est. total: <span className="order-summary-values">${total.toFixed(2)}</span></p>
                <hr />
                <Link to={"/shippinginfo"} style={{"text-decoration":"none"}}> <button className="btn btn-black btn-block">Place Order</button> </Link>

              </div>
            </div>
          </div>
        </div>

      </Fragment> :
      <Fragment>
        <div className='empty-cart'>
          <p >Your Cart Is Empty!</p>
          <button className="btn btn-black btn-block">
            <Link  to={"/products"} style={{color:"#fff",textDecoration:"none"}}>Continue Shopping</Link>
          </button>
        </div>
        
      </Fragment>


  );
}
