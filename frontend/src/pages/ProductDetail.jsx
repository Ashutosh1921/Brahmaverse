import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(3);
  const [selectedPortion, setSelectedPortion] = useState(0);

  if (!product) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <p>Product not found</p>
        <button onClick={() => navigate("/home")}>Go Home</button>
      </div>
    );
  }

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="detail-container">
      <div className="detail-image-wrapper">
        <button className="detail-back-btn" onClick={() => navigate(-1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <img src={product.image} alt={product.name} />
      </div>

      <div className="detail-content">
        <div className="detail-price-row">
          <span className="detail-price">₹{product.price.toFixed(2)}</span>
          <div className="detail-quantity">
            <button className="detail-qty-btn minus" onClick={handleDecrease}>
              −
            </button>
            <span className="detail-qty-value">{quantity}</span>
            <button className="detail-qty-btn plus" onClick={handleIncrease}>
              +
            </button>
          </div>
        </div>

        <h1 className="detail-name">{product.name}</h1>
        <p className="detail-description">{product.description}</p>

        <h3 className="detail-portion-title">Personal portion</h3>
        <div className="detail-portion-list">
          {product.portions.map((portion, index) => (
            <div key={index} className="detail-portion-item">
              <span className="detail-portion-name">{portion.name}</span>
              <div className="detail-portion-right">
                <span className="detail-portion-price">
                  ${portion.price.toFixed(2)}
                </span>
                <div
                  className={`detail-portion-radio ${
                    selectedPortion === index ? "selected" : ""
                  }`}
                  onClick={() => setSelectedPortion(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="detail-bottom">
        <button className="detail-add-btn">Add to cart</button>
        <div className="detail-home-indicator" />
      </div>
    </div>
  );
}

export default ProductDetail;
