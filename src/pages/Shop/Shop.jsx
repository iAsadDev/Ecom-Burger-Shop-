import React, { useState } from 'react';
import './Shop.css';

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const menuItems = [
    {
      id: 1,
      name: 'Classic Burger',
      description: 'Beef patty, lettuce, tomato, onion, special sauce',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 2,
      name: 'Cheeseburger',
      description: 'Classic burger with American cheese',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 3,
      name: 'Bacon Burger',
      description: 'Classic burger with crispy bacon strips',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 4,
      name: 'Mushroom Swiss',
      description: 'Beef patty with sautéed mushrooms and Swiss cheese',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1561758033-48d52648ae8b?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 5,
      name: 'Chicken Sandwich',
      description: 'Crispy chicken fillet with lettuce and mayo',
      price: 9.49,
      image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 6,
      name: 'French Fries',
      description: 'Crispy golden fries with sea salt',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=800&auto=format&fit=crop&q=60'
    }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="shop-page">
      {/* Header */}
      <header className="shop-header">
        <div className="container">
          <h1>Burger Shop</h1>
          <p>Order your favorite burgers online</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container shop-main">
        {/* Menu Items */}
        <section className="menu-items">
          <h2>Our Menu</h2>
          <div className="item-grid">
            {menuItems.map((item) => (
              <div key={item.id} className="menu-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cart Sidebar */}
        <aside className={`cart-sidebar ${cartVisible ? 'visible' : ''}`}>
          <div className="cart-header">
            <h3>Your Cart ({cart.length})</h3>
            <button 
              className="close-cart"
              onClick={() => setCartVisible(false)}
            >
              &times;
            </button>
          </div>
          
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item, index) => (
                  <div key={index} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                    <button 
                      className="remove-item"
                      onClick={() => removeFromCart(index)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <p>Total: <span>${getTotal()}</span></p>
                <button className="checkout-btn">Proceed to Checkout</button>
              </div>
            </>
          )}
        </aside>
      </main>

      {/* Cart Toggle Button */}
      <button 
        className="cart-toggle"
        onClick={() => setCartVisible(!cartVisible)}
      >
        🛒 {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
      </button>
    </div>
  );
};

export default Shop;