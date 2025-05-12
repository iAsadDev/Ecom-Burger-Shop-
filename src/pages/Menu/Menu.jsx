import "./Menu.css";

const Menu = () => {
  const menuItems = [
    {
      category: "Classic Burgers",
      items: [
        {
          id: 1,
          name: "The Original",
          description: "Beef patty, cheddar, lettuce, tomato, special sauce",
          price: 8.99,
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60"
        },
        {
          id: 2,
          name: "Cheeseburger Deluxe",
          description: "Double beef, American cheese, pickles, onions, mustard",
          price: 10.99,
          image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&auto=format&fit=crop&q=60"
        }
      ]
    },
    {
      category: "Specialty Burgers",
      items: [
        {
          id: 3,
          name: "BBQ Bacon King",
          description: "Angus beef, smoked bacon, BBQ sauce, onion rings",
          price: 12.99,
          image: "https://images.unsplash.com/photo-1561758033-48d52648ae8b?w=800&auto=format&fit=crop&q=60"
        },
        {
          id: 4,
          name: "Mushroom Swiss",
          description: "Beef patty, sautéed mushrooms, Swiss cheese, garlic aioli",
          price: 11.99,
          image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&auto=format&fit=crop&q=60"
        }
      ]
    },
    {
      category: "Chicken Sandwiches",
      items: [
        {
          id: 5,
          name: "Crispy Chicken",
          description: "Buttermilk fried chicken, coleslaw, pickles, brioche bun",
          price: 9.99,
          image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&auto=format&fit=crop&q=60"
        },
        {
          id: 6,
          name: "Spicy Nashville",
          description: "Hot chicken, comeback sauce, pickles, toasted bun",
          price: 10.99,
          image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=800&auto=format&fit=crop&q=60"
        }
      ]
    },
    {
      category: "Sides & Extras",
      items: [
        {
          id: 7,
          name: "Crispy Fries",
          description: "Hand-cut russet potatoes, sea salt",
          price: 3.99,
          image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=800&auto=format&fit=crop&q=60"
        },
        {
          id: 8,
          name: "Onion Rings",
          description: "Beer-battered, served with ranch",
          price: 4.99,
          image: "https://images.unsplash.com/photo-1633793568380-47d5d4d5c00c?w=800&auto=format&fit=crop&q=60"
        }
      ]
    }
  ];

  return (
    <div className="menu-page">
      {/* Hero Banner */}
      <div className="menu-hero" style={{ 
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=1200&auto=format&fit=crop&q=60')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h1>Our Menu</h1>
          <p>Handcrafted burgers made with premium ingredients</p>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="container py-5">
        {menuItems.map((category, index) => (
          <section key={index} className="menu-category mb-5">
            <h2 className="category-title">{category.category}</h2>
            <div className="row g-4">
              {category.items.map((item) => (
                <div key={item.id} className="col-md-6">
                  <div className="menu-item">
                    <div className="item-image">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="img-fluid"
                      />
                    </div>
                    <div className="item-details">
                      <div className="item-header">
                        <h3>{item.name}</h3>
                        <span className="item-price">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="item-description">{item.description}</p>
                      <button className="add-to-cart">Add to Order</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Special Offers */}
      <section className="special-offers py-5">
        <div className="container text-center">
          <h2 className="section-title">Today's Specials</h2>
          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="special-card">
                <h3>Burger + Fries Combo</h3>
                <p>Any classic burger with fries and drink</p>
                <p className="special-price">$12.99</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="special-card">
                <h3>Family Pack</h3>
                <p>4 burgers, 2 large fries, 4 drinks</p>
                <p className="special-price">$29.99</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="special-card">
                <h3>Happy Hour</h3>
                <p>3-6PM: 50% off all drinks</p>
                <p className="special-price">$1.99 beers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;