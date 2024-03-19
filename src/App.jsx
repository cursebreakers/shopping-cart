import { useState } from 'react'
import giftCon from '../public/gift.svg'
import Shelf from './Shelf'
import Product from './Product'
import Cart from './Cart'
import Checkout from './Checkout'
import './App.css'

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product, quantity ) => {
    console.log('Adding to cart:', product, 'Quantity:', quantity);
    const itemIndex = cartItems.findIndex(item => item.id === product.id);
      if (itemIndex !== -1) {
          // If item already exists in cart, update its quantity
          const updatedCartItems = [...cartItems];
          updatedCartItems[itemIndex].quantity += quantity;
          setCartItems(updatedCartItems);
    } else {
        // If item doesn't exist in cart, add it with the specified quantity
        setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const toggleCartVisibility = () => {
      setCartVisible(!cartVisible);
  };
  
  const toggleCheckoutVisibility = () => {
    setCheckoutVisible(!checkoutVisible);
    setCartVisible(false); // Hide cart when checking out
  };
      
  const clearCart = () => {
    setCartItems([]);
  };

  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <h1>Your Storefront</h1>
      <p>A great place to shop.</p>
      <div className="platform">
        {checkoutVisible && <Checkout cartItems={cartItems} clearCart={clearCart} />}
        <div className="menu">
          <button className='viewCart' onClick={toggleCartVisibility}>
          {cartVisible ? 'Close Bag' : `Bag (${totalItemsInCart})`}
          </button>
          <button className='checkOut' onClick={toggleCheckoutVisibility}>
            {checkoutVisible ? 'Keep Shopping' : 'Check Out'}
          </button>
        </div>
        {!checkoutVisible && !cartVisible && (
          <div className='shelfDiv'>
            <Shelf addToCart={addToCart} />
          </div>
        )}
        {cartVisible && (
          <div className="cartOverlay">
            <Cart cartItems={cartItems} setCartItems={setCartItems} />
          </div>
        )}
      </div>
      {!checkoutVisible && (
          <div className="menu">
            <button className='viewCart' onClick={toggleCartVisibility}>
            {cartVisible ? 'Close Bag' : `Bag (${totalItemsInCart})`}
            </button>
            <button className='checkOut' onClick={toggleCheckoutVisibility}>
              {checkoutVisible ? 'Keep Shopping' : 'Check Out'}
            </button>
          </div>
        )}
        <div className="footer">
          <h3>Readme:</h3>
          <a className="footLink" href="https://github.com/cursebreakers/shopping-cart#react-shopping-cart">View on GitHub</a>
          <p>Get a quote:</p>
          <a className="footLink" href="https://cursebreakers.net">Cursebreakers LLC</a>
        </div>
    </>
  )
}

export default App
