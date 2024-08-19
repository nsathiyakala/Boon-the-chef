import { Link } from "react-router-dom";

export default function WholeProduct({ product }) {
  return (
    <div className='wholee-products col-sm-12 col-md-6 col-lg-4 my-3 best-selling'>
      <div className='card p-3 rounded' style={{ display: 'flex', flexDirection: 'column' }}>
        <img className='card-img-top mx-auto' src={product.images[0].image} alt={product.name} />
        <div className='card-body d-flex flex-column'>
          <h5 className='card-title'>{product.name}</h5>
          <div className='ratings mt-auto'>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <p className='card-text'>${product.price}</p>
          <Link to={'/products/' + product._id}>
            <button>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
