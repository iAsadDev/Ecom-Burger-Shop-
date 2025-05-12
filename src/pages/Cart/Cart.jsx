import React, { useState } from 'react';
import { FaTrash, FaPlus, FaMinus, FaMapMarkerAlt, FaPhone, FaUser } from 'react-icons/fa';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Classic Burger',
      price: 8.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60',
      specialInstructions: 'No onions, extra pickles'
    },
    {
      id: 2,
      name: 'Bacon Cheeseburger',
      price: 10.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&auto=format&fit=crop&q=60',
      specialInstructions: 'Well done'
    }
  ]);

  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    town: '',
    postalCode: '',
    deliveryInstructions: ''
  });

  const [showDeliveryForm, setShowDeliveryForm] = useState(false);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const deliveryFee = subtotal > 0 ? 2.99 : 0; // $2.99 delivery fee if items exist
    return subtotal + deliveryFee;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({
      ...deliveryInfo,
      [name]: value
    });
  };

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) return;
    setShowDeliveryForm(true);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Validate all fields are filled
    if (!deliveryInfo.name || !deliveryInfo.phone || !deliveryInfo.address || 
        !deliveryInfo.city || !deliveryInfo.postalCode) {
      alert('Please fill in all required delivery information');
      return;
    }
    
    // Here you would typically send the order to your backend
    alert(`Order placed successfully! Your food will be delivered to:
           ${deliveryInfo.address}, ${deliveryInfo.city}, ${deliveryInfo.postalCode}`);
    // Reset cart and form
    setCartItems([]);
    setShowDeliveryForm(false);
  };

  return (
    <div className="cart-page">
      {/* Header */}
      <div className="cart-header">
        <div className="container">
          <h1>Your Cart</h1>
          <p>Review your order before checkout</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container cart-container">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet</p>
            <button className="continue-shopping">Continue Shopping</button>
          </div>
        ) : (
          <div className="row">
            {/* Cart Items */}
            <div className="col-lg-8">
              {showDeliveryForm ? (
                <div className="delivery-form-container">
                  <h2>Delivery Information</h2>
                  <form onSubmit={handlePlaceOrder}>
                    <div className="form-group">
                      <label><FaUser /> Full Name*</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={deliveryInfo.name}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label><FaPhone /> Phone Number*</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={deliveryInfo.phone}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label><FaMapMarkerAlt /> Complete Address*</label>
                      <input 
                        type="text" 
                        name="address" 
                        value={deliveryInfo.address}
                        onChange={handleInputChange}
                        placeholder="Street address, house number"
                        required 
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>City*</label>
                        <input 
                          type="text" 
                          name="city" 
                          value={deliveryInfo.city}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                      <div className="form-group">
                        <label>Town/Area</label>
                        <input 
                          type="text" 
                          name="town" 
                          value={deliveryInfo.town}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Postal Code*</label>
                        <input 
                          type="text" 
                          name="postalCode" 
                          value={deliveryInfo.postalCode}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Delivery Instructions</label>
                      <textarea 
                        name="deliveryInstructions" 
                        value={deliveryInfo.deliveryInstructions}
                        onChange={handleInputChange}
                        placeholder="Gate code, building number, landmarks, etc."
                        rows="3"
                      />
                    </div>

                    <div className="form-buttons">
                      <button 
                        type="button" 
                        className="back-to-cart"
                        onClick={() => setShowDeliveryForm(false)}
                      >
                        Back to Cart
                      </button>
                      <button type="submit" className="place-order-btn">
                        Place Order
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="cart-items">
                  {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="item-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="item-details">
                        <h3>{item.name}</h3>
                        <p className="item-price">${item.price.toFixed(2)}</p>
                        {item.specialInstructions && (
                          <p className="special-instructions">
                            <strong>Special Instructions:</strong> {item.specialInstructions}
                          </p>
                        )}
                        <div className="quantity-controls">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="quantity-btn"
                          >
                            <FaMinus />
                          </button>
                          <span className="quantity">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="quantity-btn"
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                      <div className="item-total">
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="remove-btn"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="col-lg-4">
              <div className="order-summary">
                <h2>Order Summary</h2>
                <div className="summary-row">
                  <span>Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)</span>
                  <span>${calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Delivery Fee</span>
                  <span>${calculateSubtotal() > 0 ? '2.99' : '0.00'}</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>

                {!showDeliveryForm ? (
                  <>
                    <button 
                      className="checkout-btn"
                      onClick={handleProceedToCheckout}
                    >
                      Proceed to Checkout
                    </button>
                    <button className="continue-shopping">Continue Shopping</button>
                  </>
                ) : (
                  <div className="delivery-info-preview">
                    <h3>Delivery To:</h3>
                    <p><strong>Name:</strong> {deliveryInfo.name}</p>
                    <p><strong>Phone:</strong> {deliveryInfo.phone}</p>
                    <p><strong>Address:</strong> {deliveryInfo.address}</p>
                    {deliveryInfo.town && <p><strong>Area:</strong> {deliveryInfo.town}</p>}
                    <p><strong>City:</strong> {deliveryInfo.city}</p>
                    <p><strong>Postal Code:</strong> {deliveryInfo.postalCode}</p>
                    {deliveryInfo.deliveryInstructions && (
                      <p><strong>Instructions:</strong> {deliveryInfo.deliveryInstructions}</p>
                    )}
                  </div>
                )}

                <div className="delivery-time-info">
                  <h3>Delivery Information</h3>
                  <p>Estimated delivery time: 30-45 minutes</p>
                  <p>Minimum order: $10.00</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;