import { Fragment } from 'react';
import Footer from '../components/footerpage';

export default function About() {
    return (
        <Fragment>
           
            <div className='container-fluid about'>
                <h1>About Us</h1>
            </div>
            <div className='container mt-5'>
                <div className='row mt-5 about-content'>
                    <div className='col-lg-6 mt-5 about-content'>
                        <h3>We Are Your Favourite Products</h3>
                        <p className='about-paragraph'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum eum officiis quia itaque consequatur maiores, nemo ipsam. Est ab laborum porro odio autem recusandae aliquam commodi debitis facere suscipit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum eum officiis quia itaque consequatur maiores, nemo ipsam. Est ab laborum porro odio autem recusandae aliquam commodi debitis facere suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum eum officiis quia itaque consequatur maiores, nemo ipsam. Est ab laborum porro odio autem recusandae aliquam commodi debitis facere suscipit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum eum officiis quia itaque consequatur maiores, nemo ipsam. 
                            Est ab laborum porro odio autem recusandae aliquam commodi debitis facere suscipit.
                        </p>
                    </div>
                    <div className='col-lg-6 p-5'>
                        <img className='img-fluid' src='./images/mixed1.jpg' alt='Mixed'/>
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-dark'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-3 feature-content-col mt-3'>
                        <div className='feature-content'>
                            <i className="fa-solid fa-truck"></i>
                            <div>
                                <h3>Free Shipping</h3>
                                <p>Above ₹100</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3 feature-content-col mt-3'>
                        <div className='feature-content'>
                            <i className="fa-solid fa-leaf"></i>
                            <div>
                                <h3>Certified Organic</h3>
                                <p>100% Natural</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3 feature-content-col mt-3'>
                        <div className='feature-content'>
                            <i className="fa-solid fa-recycle"></i>
                            <div>
                                <h3>Reusable</h3>
                                <p>Package</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3 feature-content-col mt-3'>
                        <div className='feature-content'>
                            <i className="fa-solid fa-kitchen-set"></i>
                            <div>
                                <h3>Easy and Effortless</h3>
                                <p>Cooking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                        <div className='col-12 col-lg-6'>
                        <img src="./images/rava.webp" className="d-block w-100 img-fluid  p-5" alt="First slide"/>
                            {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active p-5">
                                        
                                    </div>
                                    <div className="carousel-item p-5">
                                        <img src="./images/kuthiraivali1.jpg" className="d-block w-100 img-fluid  p-5" alt="Second slide"/>
                                    </div>
                                    <div className="carousel-item p-5">
                                        <img src="./images/meal.jpg" className="d-block w-100 img-fluid " alt="Third slide"/>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div> */}
                        </div>
                        <div className='col-12 col-lg-6 abouts'>
                            <div className='row mt-5'>
                                <div className='col-12  about-logo' >
                                    <img  src='./images/Logo.png' className='img-fluid ' alt='Logo'/>
                                    <h1 >Certified Products</h1>
                                </div>
                                {/* <div className='col-lg-8 mt-5'>
                                   
                                </div> */}
                                <div>
                                    <h3>We Deal With Various Quality Organic Products!</h3>
                                    <div className='row abouts-row'>
                                        <div className='col-lg-6'>
                                            <ul className='product-list'>
                                                <li><i class="fa-solid fa-check"></i>  Adai Dosai Mix</li>
                                                <li><i class="fa-solid fa-check"></i>  Cholam Dosai Mix</li>
                                                <li><i class="fa-solid fa-check"></i>  Health Mix</li>
                                                <li><i class="fa-solid fa-check"></i>  Kambu Dosai Mix</li>
                                                <li><i class="fa-solid fa-check"></i>  Keazhvaragu Dosai Mix</li>
                                            </ul>
                                        </div>
                                        <div className='col-lg-6'>
                                            <ul className='product-list'>
                                                <li><i class="fa-solid fa-check"></i>  Kuthiraivali Dosai Mix</li>
                                                <li><i class="fa-solid fa-check"></i>  Rava Dosai Mix</li>
                                                <li><i class="fa-solid fa-check"></i>  Saamai Dosa Mix</li>
                                                <li><i class="fa-solid fa-check"></i>  Thini Dosai Mix</li>
                                                <li><i class="fa-solid fa-check"></i>  Varagu Dosai Mix</li>
                                            </ul>
                                        </div>
                                        <button className="about-btn">Shop Now &nbsp;<i className="fa-solid fa-cart-shopping"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
            
       
        </Fragment>
    );
}
