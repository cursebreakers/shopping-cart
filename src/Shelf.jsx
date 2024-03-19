// Product display module

import React, { useState, useEffect } from 'react';
import Product from './Product'


function Shelf({ addToCart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
            .catch(error => console.error('Error fetching product data:', error));
    }, []);


    return (

        <>
        <div className="prodGrid">
                {products.map(product => (
                    <Product key={product.id} product={product} addToCart={addToCart} /> 
                    ))}
        </div>
        </>
    )
}

export default Shelf