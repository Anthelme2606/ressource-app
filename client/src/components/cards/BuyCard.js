import React from "react";
import "../../assets/css/components/buy-card.css";

const BuyCard = ({ quantity, netPrice, promotion = 0 }) => {
  return (
    <div className="buy-card">
        <h2>Commande de documents</h2>
      <div className="buy-card-content">
        <div className="card-row">
          <div className="card-item">
            <span className="label">Qte</span>
            <span className="value">{quantity}</span>
          </div>
          <div className="card-item">
            <span className="label">Vnt(FCFA)</span>
            <span className="value">{netPrice}</span>
          </div>
          <div className="card-item">
            <span className="label">P°</span>
            <span className="value">{promotion > 0 ? `${promotion}%` : "-"}</span>
          </div>
        </div>
        <div className="button-container">
          <button className="buy-button">Acheter</button>
        </div>
      </div>
      <div className="wave-effect"></div>
    </div>
  );
};

export default BuyCard;
