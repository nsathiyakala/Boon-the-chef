import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ cartItems }) {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="logo-img">
            <img className="img-fluid logo" src="/images/logo.png" alt="Logo" style={{ width: '90px' }} />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link to="/home" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
            <div className="d-flex align-items-center icons">
              <div className='cart-div'>
                <Link to="/cart" className="me-3 text-dark text-decoration-none">
                  <i className="fas fa-shopping-cart"></i>
                  <span id='cart-count' >{ cartItems && cartItems.length}</span>
                </Link>
              </div>
           
              {/* <Link to="/user" className="text-dark text-decoration-none">
                <i className="fas fa-user"></i>
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
