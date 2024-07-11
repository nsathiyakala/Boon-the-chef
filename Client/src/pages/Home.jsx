import React, { Fragment, useEffect, useState } from 'react';
import ProductCard from '../components/productCard';
// import ShopNow from '../components/shopnow';
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
    fetch(`http://localhost:8000/boonthechef/products?${searchParams.toString()}`)
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

      {/* <section className=' What-are-we p-5' >
        <div className=' container p-0'>
          <div className='row p-0' >
                <div className='col-12 col-lg-6 What-are-we-content'>
                  <div className='content-inner'>
                    <h2>What Are We</h2>
                    <p className='wl-content'>Welcome to Boon The Chef, where tradition meets health in every bite. Our mission is to bring back the essence of ancient culinary wisdom through our range of naturally prepared, nutrient-rich instant dosa mixes and health mixes. We are committed to providing you with wholesome, convenient, and delicious options that support your well-being.</p>
                    <h3 className='mb-5 slogan-1'>Herb  |  Millet  |  Spice</h3>
                    <h2>What Are We</h2>
                    <p>At Boon The Chef, we offer a diverse selection of instant dosa mixes made from traditional grains and pulses. Each mix is crafted to preserve the authentic flavors and nutritional benefits of the ingredients used in ancient recipes. Our range includes</p>
                    <ul className='content-ul'>
                        <li><strong>Rava Dosa Mix</strong>: Light and crispy, made from semolina for a quick and tasty meal.</li>
                        <li><strong>Adai Dosa Mix</strong>: Protein-packed mix of lentils and rice, perfect for a nutritious breakfast.</li>
                        <li><strong>Kambu (Pearl Millet) Dosa Mix</strong>: Rich in fiber and essential minerals, ideal for a healthy diet.</li>
                        <li><strong>Thinai (Foxtail Millet) Dosa Mix</strong>: Low in glycemic index, suitable for diabetic-friendly meals.</li>
                        <li><strong>Cholam (Sorghum) Dosa Mix</strong>: High in antioxidants, supports heart health.</li>
                        <li><strong>Kelvaragu (Finger Millet) Dosa Mix</strong>: Great source of calcium, promoting strong bones.</li>
                        <li><strong>Kuthiraivaali (Barnyard Millet) Dosa Mix</strong>: High in fiber, aids in digestion.</li>
                        <li><strong>Saamai (Little Millet) Dosa Mix</strong>: Gluten-free, perfect for those with dietary restrictions.</li>
                        <li><strong>Varagu (Kodo Millet) Dosa Mix</strong>: Low in fat, beneficial for weight management.</li>
                    </ul>
                                          <h3>Brand Mission</h3>
                        <p className='about-paragraph mt-3'>
                            <b>Empowering Delicious Choices: </b>
                            We Craft healthy, Tasty & Flavorful twist on Everyday Consumables using TRADITIONAL & NATURAL INGREDIENTS.
                        </p>
                        <h3>Brand Vision:</h3>
                        <p className='about-paragraph mt-3'>
                            To Become Every Household Favorite to transform Day to Day Eatables into delicious healthy and affordable options with the twist of traditional and natural ingredients.</p>
                        <p className='mt-3'>
                            <b>Create your combo Description: </b>
                            You are the Master Chef, Craft your combo, Your way.                    
                        </p>
                  </div>
                </div>
                <div className='col-12 col-lg-6' >
                  <div className='what-are-we-img'>
                  <img className='img-fluid' src="/images/what are we img.png" alt="" />
                  </div>
                  
                </div>
          </div>
        </div>
      
      </section> */}

      {/* -------------why-choos---------------------- */}

      <section className="why-choose pt-0 pb-0">
        <div className="container" >
        <h2 className=' fw-bold why-boon'>Why Boon The Chef?</h2>
            {/* <div className="row">
                <div className="col-12 xm-auto text-center why-choose-sub">
                    <h2>Why Boon The Chef ?</h2>
                    
                </div>
            </div> */}
            <div className="row" >
                <div className="col-12 col-lg-4 pt-5 pb-5">
                    <div className="why-choose-content text-end" >
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

                <div className="col-12 col-lg-4"  >
                    <div className="why-choose-img " >
                        <img className="img-fluid" src="./images/singleimg.png" alt="" />
                    </div>
                </div>

                <div className="col-12 col-lg-4 pt-5" >
                    <div className="why-choose-content" >
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
      <section id="products" className="container mt-5 p-5">
        <div className="row">
          <h1 className='text text-center mt-5'>Best Selling Products</h1>
          {/* <div className="col-12 my-3 " style={{border:"1px solid red"}} > */}
          {products && products.slice(0, 3).map(product => <ProductCard key={product._id} product={product} />)}
          {/* </div> */}
         
        </div>
      </section>

      {/* <section className='container-fluid shop-now p-4'>
        <ShopNow />
      </section> */}
      
      <section className='container-fluid testimonal p-5'>
        <h3 className='tesimonals-text text-center'>Testimonial</h3>
        <Testimonal />
      </section>
    </Fragment>
  );
}

export default Home;
