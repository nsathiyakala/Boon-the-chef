import React, { Fragment, useEffect, useState } from 'react';
import ProductCard from '../components/productCard';
import HomeBanner from '../components/banner';
import ShopnowBox from '../components/shopnowbox';
import Testimonal from '../components/testimonal';
import { useSearchParams } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'

import Combo from '../components/combo';

function Home({cartItems}) {
  useEffect(()=>{
    Aos.init();
  })

  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetch(`https://boon-the-chef.vercel.app/boonthechef/products?${searchParams.toString()}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => setProducts(data.products))
      .catch(error => console.error('Fetch error:', error));
  }, [searchParams]);

  return (
    <Fragment>
      <HomeBanner />

      {/* -------------why-choos---------------------- */}

      <section className="why-choose pt-0 pb-0">
        <div className="container" >
        <h2 className=' fw-bold why-boon'>Why Boon The Chef?</h2>

            <div className="row p-0" >
                <div className="col-12 col-lg-4 pt-5 pb-5 p-0 " >
                    <div className="why-choose-content text-end " >
                        <div className="why-choose-inner" >
                            <h4>Free Delivery<i className="fa-solid fa-truck"></i></h4>
                            <p>Enjoy free delivery on every purchase, ensuring your orders arrive conveniently at your doorstep</p>
                        </div>
                        <div className="why-choose-inner">
                            <h4>Quality You Can Trust <i className="fa-solid fa-person-military-pointing"></i></h4>
                            <p> Our products are crafted with meticulous care to deliver exceptional taste and satisfaction.</p>
                        </div>
                        <div className="why-choose-inner">
                            <h4>Prevention & MSG Free <i className="fa-solid fa-star"></i></h4>
                            <p> Crafted with Prevention in mind, our products are MSG Free for your health-conscious choices. </p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-4 "  >
                    <div className="why-choose-img " >
                        <img className="img-fluid" src="./images/singleimg.png" alt="" />
                    </div>
                </div>

                <div className="col-12 col-lg-4 pt-5 p-0" >
                    <div className="why-choose-content " >
                        <div className="why-choose-inner">
                            <h4 className="ih"> <i className="fa-solid fa-recycle"></i> Reusable Package</h4>
                            <p className="ip">Choose our reusable packaging option for sustainable shopping solutions, reducing waste with each order.</p>
                        </div>
                        <div className="why-choose-inner">
                            <h4 className="ih">  <i className="fa-solid fa-kitchen-set"></i> Easy & Effortless Cooking</h4>
                            <p className="ip"> Discover easy and effortless cooking solutions that simplify meal preparation.</p>
                        </div>
                        <div className="why-choose-inner">
                            <h4 className="ih"><i className="fa-solid fa-leaf"></i> 100% Natural </h4>
                            <p className="ip"> Discover our products made with 100% natural ingredients, ensuring pure and wholesome goodness in every bite. </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* -------------why-choose---------------------- */}

     

      <section className='container-fluid bg-dark'>
        <ShopnowBox />
      </section>
      <div className='container-fluid mt-4 mb-4'>
        <b>
          <h3 className='bg-white text-dark text-center combo-description'>Empowering Delicious Choices, You are the Master Chef, Craft your combo, Your way.</h3>
        </b>
      </div>

      {/* --------combo-------------- */}

      <section style={{backgroundColor:"black"}}>
        <Combo />
      </section>

      <section className="offer-sec ">
        <div className="container" >
        
            <div className="row " >
                <div className="col-12 col-lg-4 p-0 offer-sec-inner">
                    <div className="offer-content">
                      <h2 >Offers Comming <br /> Soon</h2>
                    </div>
                   
                </div>

                <div className="col-12 col-lg-4"  >
                    <div className="why-choose-img d-flex justify-content-center" >
                        <img className="img-fluid " src="./images/lable image.png" alt="logo-lable" style={{width:"50%"}} />
                    </div>
                </div>

                <div className="col-12 col-lg-4 p-0 offer-sec-inner " >
                    <div className="offer-content" >
                    <h2 >Offers Comming <br /> Soon</h2>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* ------conbo-end--------- */}

      {/* card start */}
      <section id="products" className="container mt-5 pt-5 pb-5">
        <div className="row">
          <h1 className='text text-center mt-5'>Best Selling Products</h1>
          
          {products && products.slice(0, 3).map(product => <ProductCard key={product._id} product={product} />)}
  
         
        </div>
      </section>

      
      <section className='meal-section mt-5 '>
        <div className='container-fluid meal-container'>
          <img src="./images/Web-31.jpg" alt="" />
          </div>
      </section>
      
      <section className='container-fluid testimonal pt-5 pb-5'>
        <h3 className='tesimonals-text text-center'>Testimoniall</h3>
        <Testimonal />
      </section>
    </Fragment>
  );
}

export default Home;
