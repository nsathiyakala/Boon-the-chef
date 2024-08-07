import { Carousel } from 'react-bootstrap';
import {Link} from "react-router-dom"

export default function ShopnowBox() {
    return (
        <div className="container shopnowBox">
            <Carousel>
                <Carousel.Item>
                    <div className="row bg-dark p-2 p-lg-5 pb-5 text-white">
                        <div className="col-md-8 col-lg-9 ">
                            <h3>FREE SHIPPING ON ORDERS ABOVE 499 /-</h3>
                        </div>
                        <div className="col-md-4 col-lg-3 mt-2 mt-lg-0">
                            <button className="btn btn-light">
                            <Link to={"/products"} className='no-underline'>Shop Now &nbsp; <i className="fa-solid fa-cart-shopping"></i></Link> 
                            </button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row bg-dark p-2 p-lg-5 pb-5 text-white">
                        <div className="col-md-8 col-lg-9 ">
                            <h3>OPENING SALE - 10% OFF ON ALL PRODUCTS</h3>
                        </div>
                        <div className="col-md-4 col-lg-3 mt-2 mt-lg-0">
                        <button className="btn btn-light">
                            <Link to={"/products"} className='no-underline'>Shop Now &nbsp; <i className="fa-solid fa-cart-shopping"></i></Link> 
                            </button>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
