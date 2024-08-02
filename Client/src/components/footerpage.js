import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <Fragment>
            <footer>
                <div className='container footer-container'>
                    <div className='row'>
                        <div className='col-12 col-md-6 footer-content-col' >
                            <div className='footer-content p-5'>
                                <div>
                                    <img className='img-fluid footer-logo' src="./images/Logo.png" alt="logo" />
                                </div>
                                <h1>Boon The Chef</h1>
                                <p>
                                Boon the Chef, spanning four generations, preserves cherished recipes from our great grandmother, delivering traditional flavors and nostalgia worldwide.
                                </p>
                            </div>
                        </div>

                        <div className='col-12 col-md-3 footer-content-col' >
                            <div className='footer-content pt-5'>
                                <h3>Quick Links</h3>
                                <ul >
                                    <li><Link to='/home' className='text-light no-underline'>Home</Link></li>
                                    <li><Link to='/about' className='text-light no-underline'>About</Link></li>
                                    <li><Link to='/products'className='text-light no-underline'>Product</Link></li>
                                    <li><Link to='/contact' className='text-light no-underline'>Contact</Link></li>
                                </ul>

                            </div>
                        </div>

                        <div className='col-12 col-md-3 footer-content-col' >
                            <div className='footer-content pt-5'>
                                <h3>Site Links</h3>
                                <ul>
                                    <li><Link to='/cart' className='text-light no-underline'>Shipping Details</Link></li>
                                    <li><Link to='/comboproducts' className='text-light no-underline'>Combos</Link></li>
                                    <li> <Link to={"/privacy-policy"} className='text-light no-underline'> Privacy Policy</Link></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6 footer-content-col' >
                            <div className='footer-content p-5'>
                                <h3>Follow Us On</h3>
                                <div className='footer-icons'>
                                    <i class="fa-solid fa-envelope"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-amazon"></i>
                                    <i class="fa-brands fa-facebook"></i>
                                </div>

                            </div>
                        </div>

                        <div className='col-12 col-md-3 footer-content-col' >
                            <div className='footer-content '>
                                <h3>Contact</h3>
                                <p>
                                127,poonga Nagar
                                GK Square,Kallu kuzhi saalai
                                Kurichi, Coimbatore, 641024 TN, India
                                <a href="mailto:aazhisamaiyalarai@gmail.com" style={{"text-decoration":"none", color:"white"}}> 
                                    <h5>aazhisamaiyalarai@gmail.com</h5>
                                </a>
                                <a href="tel:91+962-996-5844" style={{"text-decoration":"none", color:"white"}}>
                                    <h5>91+962-996-5844</h5>
                                </a>
                                </p>
                                       
                
                                        
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </Fragment>
    )
}