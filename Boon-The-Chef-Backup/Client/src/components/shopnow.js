export default function ShopNow() {
    return (
        <>  
        <div className='shop-now container'>
            <div className='row'>
                <div className='col-sm-6 col-md-4'>
                    <div className="card p-3 rounded">
                        <div className="card-body d-flex flex-column">
                            <h4 className="card-title text-center">
                                Health Mixed
                            </h4>
                            <div className='description'>
                            <p>
                                A nutritious blend of millets for a healthy lifestyle. Perfect for a balanced diet.</p>
                            </div>
                            <button className="shopnow-btn">Shop Now  &nbsp;<i class="fa-solid fa-arrow-right"></i></button>

                            <img
                                className="card-img-top mx-auto shop-now-img"
                                src="./images/Healthmixed-removebg-preview.png"
                            />
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                    <div className="card p-3 rounded">
                        <div className="card-body d-flex flex-column">
                            <h4 className="card-title text-center">
                                Meal Mixed
                            </h4>
                            <div className='description'>
                                <p>
                                A wholesome mix of millets for daily nutrition. Ideal for quick and healthy meals.
                                </p>
                            </div>
                            <button className="shopnow-btn">Shop Now&nbsp;<i class="fa-solid fa-arrow-right"></i></button>

                            <img
                                className="card-img-top mx-auto shop-now-img"
                                src="./images/meal-removebg.png"
                            />
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                    <div className="card p-3 rounded">
                        <div className="card-body d-flex flex-column">
                            <h4 className="card-title text-center">
                                Saamai Mixed
                            </h4>
                            <div className='description'>
                                <p>
                                A wholesome mix of Saamai millets for a balanced diet. Ideal for healthy living.

                                </p>
                            </div>
                            <button className="shopnow-btn">Shop Now &nbsp;<i class="fa-solid fa-arrow-right"></i></button>

                            <img
                                className="card-img-top mx-auto shop-now-img"
                                src="./images/mixed1-removebg-preview.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

