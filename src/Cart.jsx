// Shopping Cart Component
import React, { useState } from 'react';
import Product from './Product';
import App from './App';
import Shelf from "./Shelf"

function Cart({ cartItems, setCartItems }) {
    console.log(cartItems)

    // Function to remove an item from the cart
    const removeFromCart = (productId) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== productId);
        setCartItems(updatedCartItems);
    };

    // Function to update the quantity of an item in the cart
    const updateQuantity = (productId, newQuantity) => {
        const updatedCartItems = cartItems.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCartItems);
    };

    // Function to increment the quantity of an item in the cart
    const incrementQuantity = (productId) => {
        const updatedCartItems = cartItems.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCartItems);
    };

    // Function to decrement the quantity of an item in the cart
    const decrementQuantity = (productId) => {
        const updatedCartItems = cartItems.map((item) =>
            item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(updatedCartItems);
    };

    const cartTotal = cartItems.reduce((total, item) => {
        return total + item.quantity * item.price;
    }, 0);

    const totalItems = cartItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    return (
        <>
        <h2>Bag:</h2>
        <div className="cartTotal">
          <p>Total: ${cartTotal.toFixed(2)}</p>
          <p>Total Items: {totalItems}</p>
        </div>
        <div className="shelfDiv">
            <div className="cartItems">
                {cartItems.map((item) => (
                    <div key={item.id} className="cartItem">
                        <div className="itemInfo">
                            <img className="prodThumb" src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                        <div className="itemActions">
                            <button onClick={() => decrementQuantity(item.id)}>-</button>
                            <button onClick={() => incrementQuantity(item.id)}>+</button>
                            <button onClick={() => removeFromCart(item.id)}>Remove Item</button>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </>
    );
}

export default Cart