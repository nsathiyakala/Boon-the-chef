import React from 'react';

export default function Testimonial() {
    return (
        <div className="container mt-4">
            <div className="row mt-4 ">
                <div className="col-lg-4 mb-5">
                    <div className="card">
                    <div className="card-body text-center">
                                <div className="card-tittle">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div className="card-text mt-3 ">
                                    <p>
                                    Boon the Chef's organic instant dosa mix has been a game-changer for me. Its natural ingredients and effortless preparation make cooking dosas a joy. I love knowing I'm serving my family a healthy meal without compromising on taste. Highly recommend!
                                    </p>
                                </div>
                                <div className="card-pic d-flex justify-content-center align-items-center mt-3">
                                    <img src="./images/profile.png" className="img-fluid" style={{ maxWidth: "100px" }} />
                                    <h5 className="text-center mt-2">Devi Priya</h5>
                                </div>
                            </div>                    </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-center mb-5">
                    <div className="card">
                    <div className="card-body text-center">
                            <div className="card-tittle">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="card-text mt-3">
                                <p>
                                Boon the Chef's organic instant dosa mix is a lifesaver in my kitchen. The blend of natural ingredients ensures every dosa is both nutritious and delicious. It's become my go-to for quick and wholesome meals that everyone loves!
                                </p>
                            </div>
                            <div className="card-pic d-flex justify-content-center align-items-center mt-3">
                                <img src="./images/profile.png" className="img-fluid" style={{ maxWidth: "100px" }} />
                                <h5 className="text-center mt-2">Rohan Kumar</h5>
                            </div>
                        </div>                    </div>
                </div>
                <div className="col-lg-4 mb-5">
                    <div className="card">

                         
                    <div className="card-body text-center">
                        <div className="card-tittle">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="card-text mt-3">
                            <p>
                            Using Boon the Chef's organic instant dosa mix has transformed my mornings into stress-free and satisfying experiences. I genuinely appreciate the premium quality of its natural ingredients and how effortlessly I can whip up a batch of perfectly crispy dosas. 
                        </p>
                        </div>
                        <div className="card-pic d-flex justify-content-center align-items-center mt-3">
                            <img src="./images/profile.png" className="img-fluid" style={{ maxWidth: "100px" }} />
                            <h5 className="text-center mt-2">Neha Singh</h5>
                        </div>
                    </div>                    </div>
                </div>
            </div>
        </div>
    );
}


