import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from 'react-toastify';


export default function ProductDetails({ cartItems, setCartItems }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://boon-the-chef.vercel.app/boonthechef/product/${id}`)
      .then(res => res.json())
      .then(res => setProduct(res.product))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const handleAddToCart = () => {
    const itemExist = cartItems.find((item) => item.product._id === product._id);
    if (itemExist) {
      const updatedCartItems = cartItems.map((item) =>
        item.product._id === product._id ? { ...item, quantity: item.quantity + parseInt(quantity) } : item
      );
      setCartItems(updatedCartItems);
      toast.success('Cart item updated successfully');
    } else {
      const newItem = { product, quantity: parseInt(quantity) };
      setCartItems((prev) => [...prev, newItem]);
      toast.success('Cart item added successfully');
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>

      <div className="container-fluid view text-center" style={{ height: '100px' }}>
        <h1 className="mt-3">View Details</h1>
      </div>
      <div className="container mt-4 view detail">
        <div className="row view details">
          <div className="col-md-6">
            <img src={product.images[0].image} alt={product.name} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h3>{product.name}</h3>
            <p id="product_price">₹{product.price}</p>
            <hr />
            <p>{product.description}</p>
            <hr />
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Weight:</strong> {product.weight}</p>
            <div className="input-group mb-3">
              <span className="input-group-text">Quantity</span>
              <input
                type="number"
                className="form-control"
                value={quantity}
                onChange={handleQuantityChange}
                min={1}
              />
            </div>
            <button onClick={handleAddToCart} className="btn btn-dark text-white">Add to Cart</button>
            <Link to='/cart'><button onClick={handleAddToCart} className="btn btn-dark text-white mx-2">Order Now</button>
            </Link>
          </div>
        </div>
        <div className="row" style={{ padding: "0 20px" }}>
          <p style={{ fontSize: "15px" }}>We have a 3-day return policy, which means you have 3 days after receiving your item to request a return. &nbsp;
            <Link to="/refundpolicy" style={{ textDecoration: "none" }}> Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
              </svg>
            </Link>
          </p>

        </div>
      </div>
    </Fragment>
  );
}
