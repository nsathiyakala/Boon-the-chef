import { Link, useLocation, useNavigate } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";

export default function ComboCart({ cartItems, setCartItems }) {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedProduct } = location.state || { selectedProduct: [] };

    const [updatedProducts, setUpdatedProducts] = useState([]);

    useEffect(() => {
        const productsWithQuantity = selectedProduct.map(product => ({
            ...product,
            quantity: product.quantity || 1
        }));
        setUpdatedProducts(productsWithQuantity);
    }, [selectedProduct]);

    const backsubmit = () => {
        navigate(-1);
    };

    const removeItem = (productId) => {
        const updatedSelectedProduct = updatedProducts.filter(product => productId !== product._id);
        setUpdatedProducts(updatedSelectedProduct);

        setTimeout(() => {
            navigate('/comboproducts', { state: { selectedProduct: updatedSelectedProduct } });
        }, 2000);
    };

    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity < 1) return; // Prevent setting quantity less than 1
        const updatedSelectedProduct = updatedProducts.map(product =>
            product._id === productId ? { ...product, quantity: newQuantity } : product
        );
        setUpdatedProducts(updatedSelectedProduct);
    };

    const qty = updatedProducts.reduce((acc, product) => (acc + product.quantity), 0);
    const price = updatedProducts.reduce((acc, product) => (acc + product.quantity * product.price), 0);

    return (
        <div className="checkout-container container mx-auto">
            {updatedProducts.length === 0 ? (
                <p>No items selected</p>
            ) : (
                <Fragment>
                    <div className="row">
                        <div className="col-lg-9 checkout">
                            {updatedProducts.map(product => (
                                <div key={product._id} className="row d-flex justify-content-between">
                                    <div className="col-12">
                                        <hr />
                                        <div className="checkout-item container">
                                            <div className="row">
                                                <div className="col-4 col-lg-3">
                                                    <img src={product.images[0].image} alt={product.name} height="150" width="190" />
                                                </div>
                                                <div className="col-7 col-lg-5">
                                                    <label style={{ fontSize: "18px" }}>{product.name}</label>
                                                    <div className="ratings mt-auto" style={{ fontSize: "10px" }}>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-half-o"></i>
                                                        <i className="fa fa-star-o"></i>
                                                        <p id="card_item_price" className="mt-3" style={{ fontSize: "20px" }}>${product.price}</p>
                                                    </div>
                                                </div>
                                                <div className="col-4 col-lg-1 mt-4 mt-lg-0 order-4 order-lg-2">
                                                    <div className="stockCounter d-inline">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            value={product.quantity}
                                                            onChange={(e) => handleQuantityChange(product._id, parseInt(e.target.value))}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-4 col-lg-2 order-3"></div>
                                                <div className="col-1 order-2 order-lg-4 p-0 text-end">
                                                    <i
                                                        className="fa fa-times-circle close-icon"
                                                        onClick={() => removeItem(product._id)}
                                                    ></i>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-3">
                            <div id="checkout_summary">
                                <h4>Order Summary</h4>
                                <hr />
                                <p>Subtotal: <span className="order-summary-values">{qty} units</span></p>
                                <p>Est. total: <span className="order-summary-values">${price.toFixed(2)}</span></p>
                                <hr />
                                <div className="checkout-buttons">
                                    <button onClick={backsubmit} className="btn btn-black btn-block mb-3">Back</button>
                                    <Link to={"/comboShippinginfo"} state={{ selectedProduct: updatedProducts }}>
                                      <button className="btn btn-black btn-block" style={{"text-decoration":"none"}}>Place Order</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </div>
    );
}
