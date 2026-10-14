import { useNavigate } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import products from "../data/products";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const bestsellers = products.filter((p) => p.category === "bestseller");
  const popularItems = products.filter((p) => p.category === "popular" || p.category === "bestseller");

  return (
    <div className="home-container">
      <StatusBar />

      <div className="home-header">
        <p className="home-location-label">Current Locations</p>
        <div className="home-location">
          <span className="home-location-text">Model Town, New Delhi</span>
          <svg className="home-location-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      <div className="home-user-row">
        <span className="home-user-name">Karan</span>
        <div className="home-user-actions">
          <button className="home-action-btn phone">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          </button>
          <button className="home-action-btn calendar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </button>
        </div>
      </div>

      <h2 className="home-section-title">Best Seller</h2>
      <div className="bestseller-scroll">
        {bestsellers.map((product) => (
          <div
            key={product.id}
            className="bestseller-card"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <div className="bestseller-img-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
            <span className="bestseller-price">
              ₹{product.price.toFixed(2)}
              {product.originalPrice && (
                <span className="bestseller-original-price">
                  ₹{product.originalPrice.toFixed(2)}
                </span>
              )}
            </span>
          </div>
        ))}
      </div>

      <div className="promo-banner">
        <img src="/images/promo.jpg" alt="Promotional offer" />
        <div className="promo-banner-overlay">
          <span className="promo-banner-text">Experience our delicious new dish</span>
          <span className="promo-banner-discount">30% OFF</span>
        </div>
      </div>

      <h2 className="home-section-title">Popular Items</h2>
      {popularItems.map((item) => (
        <div
          key={item.id}
          className="popular-item"
          onClick={() => navigate(`/product/${item.id}`)}
        >
          <div className="popular-item-img">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="popular-item-info">
            <p className="popular-item-name">{item.name}</p>
            <p className="popular-item-desc">{item.description.slice(0, 40)}...</p>
          </div>
          <span className="popular-item-price">₹{item.price.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}

export default Home;
