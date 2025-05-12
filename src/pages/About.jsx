import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="container">
            <h1 className="hero-title">Our Story</h1>
            <p className="hero-subtitle">Crafting burger perfection since 2010</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="mission-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1603508102983-99b101395d1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Our kitchen" 
                className="img-fluid rounded-3 shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title mb-4">Our Passion for Burgers</h2>
              <p className="lead">
                At Burger Haven, we don't just make burgers - we craft experiences. 
                What started as a small food truck in downtown Austin has grown into 
                a beloved local institution thanks to our uncompromising commitment 
                to quality.
              </p>
              <p>
                Every ingredient tells a story - from our locally-sourced beef to 
                our house-made buns baked fresh daily. We believe the perfect burger 
                balances flavor, texture, and that unforgettable first bite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Why We're Different</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="value-card p-4 h-100">
                <div className="value-icon mb-3">🍔</div>
                <h3>Premium Ingredients</h3>
                <p>We source only the freshest, highest quality ingredients from trusted local suppliers.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-card p-4 h-100">
                <div className="value-icon mb-3">🔥</div>
                <h3>Handcrafted</h3>
                <p>Every patty is hand-formed and cooked to order for maximum flavor and juiciness.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="value-card p-4 h-100">
                <div className="value-icon mb-3">❤️</div>
                <h3>Made with Love</h3>
                <p>Our secret ingredient is passion - we put our heart into every burger we serve.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Our team" 
                className="img-fluid rounded-3 shadow"
              />
            </div>
            <div className="col-lg-6 order-lg-1">
              <h2 className="section-title mb-4">Meet the Crew</h2>
              <p>
                Our team of burger enthusiasts brings together decades of culinary 
                experience with a shared love for creating memorable meals. From 
                our grill masters to our friendly front-of-house staff, everyone 
                plays a part in delivering the Burger Haven experience.
              </p>
              <p className="highlight-text mt-4">
                "We're not just serving food - we're creating moments of joy, 
                one burger at a time."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="visit-section py-5 bg-dark text-white">
        <div className="container text-center">
          <h2 className="section-title mb-4">Join the Burger Revolution</h2>
          <p className="lead mb-5">
            Visit us at our flagship location in downtown Austin or check out 
            one of our food trucks around the city.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-primary btn-lg">View Locations</button>
            <button className="btn btn-outline-light btn-lg">Order Online</button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                      url('https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          background-size: cover;
          background-position: center;
          height: 60vh;
          display: flex;
          align-items: center;
          position: relative;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }
        
        .hero-title {
          font-size: 4rem;
          font-weight: 700;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 300;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          position: relative;
          display: inline-block;
        }
        
        .section-title:after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 50px;
          height: 4px;
          background: #ff6b6b;
        }
        
        .value-card {
          background: white;
          border-radius: 10px;
          transition: transform 0.3s ease;
          text-align: center;
        }
        
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .value-icon {
          font-size: 2.5rem;
        }
        
        .highlight-text {
          font-size: 1.25rem;
          font-style: italic;
          color: #ff6b6b;
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;