// Checkout component
import { useState } from 'react'
import Cart from "./Cart";
import App from './App';


function Checkout({ cartItems, clearCart, toggleCartVisibility, toggleCheckoutVisibility }) {

    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price * item.quantity;
        });
        return total.toFixed(2);
    };

    const handlePlaceOrder = () => {
        // Place order logic here (e.g., sending order details to backend)
        // After placing the order, clear the cart
        clearCart();
        alert('Order placed successfully!');
    };

    return (
        <>
          <div className="checkoutDiv">
            <h2>Confirm Order</h2>
            <h3>Order Summary:</h3>
            <ul>
                {cartItems.map(item => (
              <li key={item.id}>
                {item.title} - ${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
            </ul>
            <h3>Total: ${calculateTotal()}</h3>
            <button onClick={handlePlaceOrder}>Place Order</button>
            <div className="menu">
            </div>
          </div>
        </>
    )
}

export default Checkout