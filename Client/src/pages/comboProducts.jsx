import { Fragment, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

export default function ComboProducts({ cartItems, setCartItems }) {
  const [products, setProducts] = useState([]); 
  const [selectedProduct, setSelectedProduct] = useState([]); 
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('https://boon-the-chef.vercel.app/boonthechef/products')
      .then(res => res.json())
      .then(res => setProducts(res.products));
  }, []);

  const handleChange = (product) => {
    setSelectedProduct((previousSelectedProduct) => {
      const isSelected = previousSelectedProduct.some(p => p._id === product._id);
      let updatedSelectedProduct;

      if (isSelected) {
        updatedSelectedProduct = previousSelectedProduct.filter(p => p._id !== product._id);
      } else {
        if (previousSelectedProduct.length >= 3) {
          toast.error('You can only select up to 3 products!');
          return previousSelectedProduct; 
        }
        updatedSelectedProduct = [...previousSelectedProduct, product];
      }
      
      if (updatedSelectedProduct.length === 3) {
        // toast.success('3 Products added to your Combo')
        navigate('/combocart', { state: { selectedProduct: updatedSelectedProduct } });
      }

      return updatedSelectedProduct; 
    });
  };

  return (
    <Fragment>
      <div className="selectcombo">
      <marquee  direction="right">
          <h3>You Can Select Only 3 Products To Create Your Combo</h3>
      </marquee>
        <div className='container row d-flex flex-wrap mx-auto'>
         
          {products && products.map(product => (
            
            <div key={product._id} className='col-sm-12 col-md-6 col-lg-4 my-3 best-selling'>
              <div className="card rounded">
                <img className="card-img-top mx-auto" src={product.images[0].image} alt={product.name} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    <Link to={"/product/"+product._id}>{product.name}</Link>
                  </h5>
                  <div className="ratings mt-auto">
                    {/* Rating icons */}
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <p className="card-text">${product.price}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-center">
                Select the Item
                <input className="m-2"
                  type="checkbox"
                  checked={selectedProduct.some(p => p._id === product._id)}
                  disabled={selectedProduct.length >= 3 && !selectedProduct.some(p => p._id === product._id)}
                  onChange={() => handleChange(product)}
                  style={{fontSize:"100px", border:"1px solid red"}}

                />
                
                </div>
                <hr />
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
