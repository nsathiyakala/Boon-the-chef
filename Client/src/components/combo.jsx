import { Link } from "react-router-dom";

export default function Combo (){
    return(
        <>
        <section className="container">
                <div className="row  combo">
                    <div className="col-lg-10 ">
                    <h1 className="text-start p-5">Created your combo</h1>
                    </div>
                    <div className="col-lg-2">
                    <button> <Link to={'/comboproducts'} className="text-center mt-5 p-5 no-underline">Create</Link>
                     </button>

                    </div>
                </div>
        </section>
        </>
    )
}