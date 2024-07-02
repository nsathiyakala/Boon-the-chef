import { Carousel } from 'react-bootstrap';

export default function ShopnowBox() {
    return (
        <div className="container shopnowBox">
            <Carousel>
                <Carousel.Item>
                    <div className="row bg-dark p-5 text-white">
                        <div className="col-lg-9 d-flex align-items-center">
                            <h3>FREE SHIPPING ON ORDERS ABOVE 499 /-</h3>
                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <button className="btn btn-light">
                                Shop Now &nbsp; <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row bg-dark p-5 text-white">
                        <div className="col-lg-9 d-flex align-items-center">
                            <h3>OPENING SALE - 10% OFF ON ALL PRODUCTS</h3>
                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <button className="btn btn-light">
                                Shop Now &nbsp; <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
