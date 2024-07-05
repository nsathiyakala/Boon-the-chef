import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShippingInfo = ({ cartItems }) => {
  const [shippingDetails, setShippingDetails] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phoneNumber: '',
    email:''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({
      ...shippingDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/checkout', { state: { shippingDetails, cartItems } });
  };

  return (
    <div className="container">
      <div>
        <h2 className='text-center'>Shipping Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="row shipping-info mt-4">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-12 col-lg-6">

                  <label>Full Name:</label>
                  <input
                    type="text"
                    name="fullName"
                    value={shippingDetails.fullName}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="col-12 col-lg-6">
                  <label>Phone Number:</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={shippingDetails.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-lg-6">

                  <label>Address:</label>
                  <input
                    type="text"
                    name="address"
                    value={shippingDetails.address}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="col-12 col-lg-6">

                  <label>Email:</label>
                  <input
                    type="text"
                    name="email"
                    value={shippingDetails.email}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="col-12 col-lg-6">
                  <label>City:</label>
                  <input
                    type="text"
                    name="city"
                    value={shippingDetails.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12 col-lg-6" >
                  <label>State:</label>
                  <input
                    type="text"
                    name="state"
                    value={shippingDetails.state}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <label>Zip Code:</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={shippingDetails.zipCode}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <label>Country:</label>
                  <input
                    type="text"
                    name="country"
                    value={shippingDetails.country}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div> <button type="submit"> Check Out</button></div>
               
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
};

export default ShippingInfo;
