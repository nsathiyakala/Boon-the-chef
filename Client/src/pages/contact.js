import { Fragment } from "react";
import Footer from "../components/footerpage";

export default function Contact() {
    return (
        <Fragment>
            <div className='container-fluid contact '>
                <h1 className="text-center">Contact Us</h1>
                <div className="container contacts">
                    <div className="row contacts-row">
                        <div className="col-lg-4">
                            <div className="card contact-card">
                                <div className="card-text text-center">
                                    <i className="fa-solid fa-phone contact-icon"></i>
                                    <h5>91 + 962-996-5844</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card contact-card">
                                <div className="card-text text-center">
                                    <i className="fa-solid fa-location-crosshairs contact-icon"></i>
                                    <h5>XYZ Corporation 1234 Elm Street Suite 567</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card contact-card">
                                <div className="card-text text-center">
                                    <i className="fa-solid fa-envelope contact-icon"></i>
                                    <h5>aazhisamaiyalarai@gmail.com</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <form className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="Enter your email address" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>

                        </div>
                        <div className="col-12 col-lg-6 p-5 contact-img">
                            <img className="img-fluid" src="/images/logo.png" alt="logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}