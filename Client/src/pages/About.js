
export default function About() {
    return (
        <div className="about-page">

            <div className='container-fluid about'>
                <h1>About Us</h1>
            </div>
            <div className='container mt-0'>
                <div className='row  about-content'>
                    <div className='col-lg-6 mt-5 about-content'>
                        <h3>Brand Mission</h3>
                        <p className='about-paragraph mt-3'>
                            <b>Empowering Delicious Choices: </b>
                            We Craft healthy, Tasty & Flavorful twist on Everyday Consumables using TRADITIONAL & NATURAL INGREDIENTS.
                        </p>
                        <h3>Brand Vision:</h3>
                        <p className='about-paragraph mt-3'>
                            To Become Every Household Favorite to transform Day to Day Eatables into delicious healthy and affordable options with the twist of traditional and natural ingredients.</p>
                        <p className='mt-3'>
                            <b>Create your combo Description: </b>
                            You are the Master Chef, Craft your combo, Your way.                    
                        </p>
                    </div>

                    <div className='col-lg-6 pt-5'>
                        <img className='img-fluid' src='./images/web-23.jpg' alt='Mixed' />
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-dark'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-3 feature-content-col mt-3'>
                        <div className='feature-content'>
                            <i className="fa-solid fa-truck"></i>
                            <div>
                                <h3>Free Shipping</h3>
                                <p>Above ₹100</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3 feature-content-col mt-3'>
                        <div className='feature-content'>
                            <i className="fa-solid fa-leaf"></i>
                            <div>
                                <h3>Certified Organic</h3>
                                <p>100% Natural</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3 feature-content-col mt-3'>
                        <div className='feature-content'>
                            <i className="fa-solid fa-recycle"></i>
                            <div>
                                <h3>Reusable</h3>
                                <p>Package</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3 feature-content-col mt-3'>
                        <div className='feature-content'>
                            <i className="fa-solid fa-kitchen-set"></i>
                            <div>
                                <h3>Easy and Effortless</h3>
                                <p>Cooking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className='ourstory container'>
                    <h3 className='text-center mb-5 mt-5'>Our Story</h3>
                    <div className="row">
                        <div className="col-lg-6 mt-3" >
                            <p>  <b>Boon the Chef</b>  has its roots spanning for over four generations. Back in the early 1900s, our great grandmother’s recipes were loved by everyone. They were traditionally prepared by hand with love and care. Times have changed, but the recipes she left us behind with still stand true to the spirit of their nativity. When we had to travel to the West, my mother packed these recipes in small packets so that we can have a fulfilling meal whenever we felt like it. The recipes were so close to our hearts that they brought back the memories of our childhood whenever we had them.
                            </p>
                            <p>
                            They became an instant hit with our colleagues and neighbours abroad. We understood that these recipes now carried a life of their own and spread joy to everyone who tasted them. This was nothing short of magic. So, we decided to spread the same love and joy back home, in India. 
                            </p>
                            <p>
                            The recipes are prepared by mothers and youngsters in our town in the Kongu region of Tamil Nadu. They hold several decades of history, culture, and the results of tireless experimentation in little portable packets sold across South India. Under the brand name <b>Boon the chef</b> Foods, a myriad of spices is delivered to you at your doorsteps. From Millets to <b>Curry Masalas, Rasam, Sambar, and Vathal Kulambu powders to Ragi, Kambu, Thinai recipes, Health Mixes</b> as well as everyone’s favourite Biriyani Masala, we provide you with 100% traditionally prepared recipes. 
                            </p>
                            <p>
                            We hope to give you the feeling of nostalgia from your mother’s cooking and believe it is our mission to foster and nurture these timeless spices that have been passed down to us through generations. Our mission is to preserve their taste and essence, the same way our family has preserved them for over a century, and to pass its spirit down to our future generations. 
                            </p>
                        </div>
                        <div className="col-lg-6" >
                            <div style={{height:"500px"}}>
                            <img className='img-fluid mt-3' src='/images/ourstory.jpeg' alt='' style={{width:"100%",height:"100%", objectFit:"contain"}}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6 order-1 order-lg-0'>
                        <img src="./images/rava.webp" className="d-block w-100 img-fluid  pt-5" alt="First slide" />
                    </div>
                    <div className='col-12 col-lg-6 abouts order-0 order-lg-1'>
                        <div className='row mt-3 mt-lg-5'>
                            <div className='col-12  about-logo' >
                                <div className='about-logo-dev'>
                                <img src='./images/Logo.png' className='img-fluid ' alt='Logo' />
                                </div>
                                
                                <h1 className='pt-5'>Certified Products</h1>
                            </div>
                          
                            <div>
                                <h3>We Deal With Various Quality Organic Products!</h3>
                                <div className='row abouts-row'>
                                    <div className='col-lg-6'>
                                        <ul className='product-list'>
                                            <li><i class="fa-solid fa-check"></i>  Adai Dosai Mix</li>
                                            <li><i class="fa-solid fa-check"></i>  Cholam Dosai Mix</li>
                                            <li><i class="fa-solid fa-check"></i>  Health Mix</li>
                                            <li><i class="fa-solid fa-check"></i>  Kambu Dosai Mix</li>
                                            <li><i class="fa-solid fa-check"></i>  Keazhvaragu Dosai Mix</li>
                                        </ul>
                                    </div>
                                    <div className='col-lg-6'>
                                        <ul className='product-list'>
                                            <li><i class="fa-solid fa-check"></i>  Kuthiraivali Dosai Mix</li>
                                            <li><i class="fa-solid fa-check"></i>  Rava Dosai Mix</li>
                                            <li><i class="fa-solid fa-check"></i>  Saamai Dosa Mix</li>
                                            <li><i class="fa-solid fa-check"></i>  Thini Dosai Mix</li>
                                            <li><i class="fa-solid fa-check"></i>  Varagu Dosai Mix</li>
                                        </ul>
                                    </div>
                                    <button className="about-btn">Shop Now &nbsp;<i className="fa-solid fa-cart-shopping"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}