// Product card component
import React, { useState } from 'react';
import App from './App';
import Cart from './Cart';

function Product({ product, addToCart }) {
    const [showDescription, setShowDescription] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };
  
    const handleIncrement = () => {
        setQuantity(quantity + 1);
        console.log(quantity)
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            console.log(quantity)
        }
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setQuantity(1);
    };

    return (
        <div className="prodItem">
            <img className="prodThumb" src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            <a className="descriptor" href="#description" onClick={toggleDescription}>Description</a>
            {showDescription && (
                <div className="descriptionPopup">
                    <p>{product.description}</p>
                    <button onClick={toggleDescription}>Close</button>
                </div>  
            )}
            <div className="cartControls">
                <button onClick={handleDecrement}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Product;