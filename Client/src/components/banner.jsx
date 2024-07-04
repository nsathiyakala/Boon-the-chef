import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'

export default function HomeBanner() {
  return (
    <Fragment>
      {/* <section className='home-banner-sec'>
        <div className='Home-banner'>
              <div className='container Home-banner-container'> 
                <div className='row'>
                  <div className='col-12 col-lg-6 home-banner-img-container'>
                    <div className='home-banner-img p-5'>
                      <img className='img-fluid' src="./images/thinai.webp" alt="home-banner-img" />
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
      </section> */}
      <section className='home-banner-sec'><div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

            </div>
            <div className="carousel-inner" >
                <div className="carousel-item active">
                    <img src="/images/homecarousel.jpg" className="d-block w-100" alt="..." />
                    <div class="carousel-caption ">
                        {/* <p className=''>Invest In A Living Formula. Own a Franchise</p> */}
                        {/* <h5>Franchise With Us</h5> */}

                    </div>
                </div>
                <div className="carousel-item" style={{backgroundColor:"#005395"}}>
                    <img src="/images/millets.jpg" className="d-block w-100" alt="..." />
                    <div class="carousel-caption">
                        {/* <p className=''> Nourishing Hearts, One Good Deed at a Time!</p> */}
                        <h5>MILLETS</h5>

                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/images/spice.jpg" className="d-block w-100" alt="..." />
                    <div class="carousel-caption center-caption">
                        {/* <p className=''>Tending to the Garden of Goodness with Care and Commitment</p> */}
                        <h5>SPICE</h5>

                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/images/herbs.jpg" className="d-block w-100" alt="..." />
                    <div class="carousel-caption center-caption">
                        {/* <p className=''>Tending to the Garden of Goodness with Care and Commitment</p> */}
                        <h5>HERBS</h5>

                    </div>
                </div>
            </div>
            {/* <button className="carousel-control-prev" type="button" data-bs-target="#Homecarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#Homecarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button> */}
        </div></section>
              


     
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
