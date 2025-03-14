import React, { Fragment, useEffect, useState } from 'react';
import ProductCard from '../components/productCard'; 

export default function Products() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('');
    const[message,setMessage]=useState('')
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://boon-the-chef.vercel.app/boonthechef/products?category=${category}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        
       
        fetchProducts();

      
        
    }, [category]);

    const HerbsCategory=()=>{
        setCategory('Herbs');
        setMessage("Coming Soon")
    }
   

    return (
        <Fragment>
            <div className='all-products-sec'>
                <h2 className='text-center'>Home/Products </h2>
                <h1 className='text-center'> Products</h1>
                <div className='container all-products-container mt-5'>
                    <div className='row '>
                        <div className='d-flex justify-content-center'>
                            <div className='d-flex justify-content-center'>
                                <h3 className='mb-5 slogan-1'>
                                    <button className={category === 'Millets'? 'active' :''} id='active1' type='button' onClick={() => setCategory('Millets')}>Millets</button> |&nbsp;
                                    <button type='button' className={category === 'Spice'? 'active' :''} onClick={() => setCategory('Spice')}>Spice Mix</button> |&nbsp; 
                                    
                                    {/* <button type='button' className={category === 'Healthmix'? 'active' :''} onClick={() => setCategory('Healthmix')}>Health Mix</button> |&nbsp;
                                    <button type='button' className={category === 'Boiledrice'? 'active' :''} onClick={() => setCategory('Boiledrice')}>Boiled Rice</button> |&nbsp;  */}
                                    <button type='button' className={category === 'Herbs'? 'active' :''} onClick={HerbsCategory}>Herb</button>    

                                </h3>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='row' >
                                {category === "Herbs" && <h2 className='text-center'>{message}</h2>}
                                {products && products.map(product => <ProductCard key={product._id} product={product} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </Fragment>
    );
}