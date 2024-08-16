import { Fragment } from "react";
import { toast } from "react-toastify";

export default function Contact() {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "f9afd126-4733-45c2-8294-09464814e23c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Form Submited, We'll Reach You Shortly")
            event.target.reset();
        } else {
            console.log("Error", data);
        }
    }

        return (
            <Fragment>
                <div className='container-fluid contact '>
                    <h1 className="text-center">Contact Us</h1>
                    <div className="container contacts">
                        <div className="row contacts-row">
                            <div className="col-lg-4 mt-3 mt-lg-0">
                                <div className="card contact-card">
                                    <div className="card-text text-center">
                                        <i className="fa-solid fa-phone contact-icon"></i>
                                        <a href="tel:91+962-996-5844" style={{"text-decoration":"none", color:"black"}}>
                                        <h5>962-996-5844</h5>
                                        </a>
                
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-3 mt-lg-0">
                                <div className="card contact-card">
                                    <div className="card-text text-center">
                                        <i className="fa-solid fa-location-crosshairs contact-icon"></i>
                                        <h5>127,poonga Nagar,  <br/> GK Square,Kallu kuzhi saalai, <br/> Kurichi, Coimbatore, 641024 TN, India</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-3 mt-lg-0">
                                <div className="card contact-card">
                                    <div className="card-text text-center">
                                        <i className="fa-solid fa-envelope contact-icon"></i>
                                        <a href="mailto:aazhisamaiyalarai@gmail.com" style={{"text-decoration":"none", color:"black"}}>
                                        <h5>aazhisamaiyalarai@gmail.com</h5>
                                        </a>
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
                                <form className="contact-form" onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" id="email" name="email" placeholder="Enter your email address" required />
                                    </div>
                                    <div className="form-group">
                                        <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </form>

                            </div>
                            <div className="col-12 col-lg-6 p-5 contact-img">
                                <img className="img-fluid" src="/images/logo.png" alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }