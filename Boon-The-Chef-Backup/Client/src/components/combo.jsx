import { Link } from "react-router-dom";

export default function Combo() {
    return (
        <>
            <section className="container">
                <div className="row  combo">
                    <div className="  col-sm-9">
                        <h1 className="text-start">Create your combo</h1>
                    </div>
                    <div className="col-sm-3 ">
                        <button> <Link to={'/comboproducts'} className="text-center  p-5 no-underline">Create</Link>
                        </button>

                    </div>
                </div>
            </section>
        </>
    )
}