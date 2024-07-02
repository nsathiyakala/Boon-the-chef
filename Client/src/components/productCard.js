import {Link} from 'react-router-dom'

export default function ProductCard({product}){
             <h3 className='text text-center'>Best Selling products</h3>

    return(
        <>
        <div className="col-sm-12 col-md-6 col-lg-4 my-3 best-selling" >
          <div className="card p-3 rounded">
            <img
              className="card-img-top mx-auto"
              src={product.images[0].image}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
              <Link to={"/product"+product._id}>{product.name} </Link> 
              </h5>
              <p className="card-text">₹{product.price}</p>
              <p className="card-text">Category:{product.category}</p>

              <div className="ratings mt-auto">
               <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
                {/* <span id="no_of_reviews">(5 Reviews)</span> */}
              </div>
              
              <Link to={"/product/"+product._id} id="view_btn" className="btn btn-block">View Details</Link>
            </div>
          </div>
        </div>
        </>
    )
}