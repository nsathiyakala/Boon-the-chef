import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function HomeBanner() {
  return (
    <Fragment>
      <section className='home-banner-sec'>
        <div className='Home-banner'>
              <div className='container Home-banner-container'> 
                <div className='row'>
                  <div className='col-12 col-lg-6 home-banner-img-container'>
                    <div className='home-banner-img p-5'>
                      {/* <img className='img-fluid' src="./images/thinai.webp" alt="home-banner-img" /> */}
                    </div>
                  </div>
                  <div className='col-12 col-lg-6 home-banner-content-container'>
                    <div className='home-banner-content'>
                      <h5>Best Quality Products</h5>
                      <h1>Effortless Energetic Meal Day & Night </h1>
                      <p>Enjoy the authentic taste of traditional dosas with our premium dosa mix. 
                        Experience effortless preparation and make perfect crispy dosas in minutes. 
                        Order now and bring the taste of India to your kitchen!
                      </p>
                      <button>
                         Shop Now &nbsp;<i className="fa-solid fa-cart-shopping"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </section>
     
{/* 
      <section className='feature-Section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-3 feature-content-col'>
              <div className='feature-content'>
              <i class="fa-solid fa-truck"></i>
              <div>
                <h3>Free Shipping</h3>
                <p>Above ₹100</p>
              </div>
             
              </div>
             
            </div>
            <div className='col-12 col-md-6 col-lg-3 feature-content-col'>
              <div className='feature-content'>
              <i class="fa-solid fa-circle-check"></i>
              <div>
                <h3>Certified Organic</h3>
                <p>100% Guarantee</p>
              </div>
             
              </div>
             
            </div>
            <div className='col-12 col-md-6 col-lg-3 feature-content-col'>
              <div className='feature-content'>
              <i class="fa-solid fa-money-bill"></i>
              <div>
                <h3>Huge Savings</h3>
                <p>At Lowest Price</p>
              </div>
             
              </div>
             
            </div>
            <div className='col-12 col-md-6 col-lg-3 feature-content-col'>
              <div className='feature-content'>
              <i class="fa-solid fa-recycle"></i>
              <div>
                <h3>Easy Returns</h3>
                <p>No Questions Asked</p>
              </div>
             
              </div>
             
            </div>
          </div>
        </div>
      </section> */}
    </Fragment>
  )
}
