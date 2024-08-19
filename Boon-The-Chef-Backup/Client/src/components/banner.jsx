import React, { Fragment } from 'react'


export default function HomeBanner() {
  return (
    <Fragment>
      <section className='home-banner-sec'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>

          </div>
          <div className="carousel-inner" >
            <div className="carousel-item active">
              <img src="/images/homecarousel.jpg" className="d-block w-100" alt="..." />

            </div>
            <div className="carousel-item" style={{ backgroundColor: "#005395" }}>
              <img src="/images/millets banner.jpeg" className="d-block w-100" alt="..." />

            </div>
            <div className="carousel-item">
              <img src="/images/spice banner.jpeg" className=" w-100" alt="..." />

            </div>
            <div className="carousel-item">
              <img src="/images/boiledrice banner.jpeg" className=" w-100" alt="..." />

            </div>
            <div className="carousel-item">
              <img src="/images/healthmix banner.jpeg" className=" w-100" alt="..." />

            </div>
            <div className="carousel-item">
              <img src="/images/herbs.jpg" className="d-block w-100" alt="..." />

            </div>
          </div>
          
        </div>
      </section>




    </Fragment>
  )
}
