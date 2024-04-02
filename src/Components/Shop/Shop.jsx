import React from "react";
import "../Style/Shop.css";

const Shop = () => {
  const inventory = {
    hearts: 3,
    crystals: 78,
    streakSavers: 5,
  };

  const shopItems = {
    hearts: [
      { amount: 1, cost: 500 },
      { amount: 2, cost: 750 },
      { amount: 5, cost: 2000 },
    ],
    streakSavers: [
      { amount: 3, cost: 500 },
      { amount: 5, cost: 700 },
      { amount: 10, cost: 1000 },
    ],
    moreCrystals: [
      { amount: 100, cost: "4.99$" },
      { amount: 500, cost: "19.99$" },
      { amount: 1000, cost: "35.99$" },
    ],
  };

  const buyItem = (item) => {
    console.log(`Bought item: ${item}`);
  };

  return (
    <div className="shop">
      <header className="shop-header">Shop 🛒</header>
      <section className="inventory">
        <div className="inventory-item">
          <div className="item-icon heart-icon">❤️</div>
          <div className="item-count">x{inventory.hearts}</div>
          <div className="item-timer">+1 in 04:32</div>
        </div>
        <div className="inventory-item">
          <div className="item-icon crystal-icon">💎</div>
          <div className="item-count">x{inventory.crystals}</div>
        </div>
        <div className="inventory-item">
          <div className="item-icon streak-icon">🧊</div>
          <div className="item-count">x{inventory.streakSavers}</div>
        </div>
      </section>
      {/* Render shop items... */}
      {/* Add event handlers and rest of the code... */}

      {/* Hearts Section */}
      <div className="shop-section">
        <h2 className="section-title">Hearts</h2>
        <p>No hearts – no learning</p>
        <div className="shop-items">
          {shopItems.hearts.map((item, index) => (
            <div
              key={index}
              className="shop-item"
              onClick={() => buyItem(item)}
            >
              <div className="item-icon heart-icon">❤️ x{item.amount}</div>
              <div className="item-cost">{item.cost}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Streak Savers Section */}
      <div className="shop-section">
        <h2 className="section-title">Streak saver</h2>
        <p>Save your streak, even if you can’t study today</p>
        <div className="shop-items">
          {shopItems.streakSavers.map((item, index) => (
            <div
              key={index}
              className="shop-item"
              onClick={() => buyItem(item)}
            >
              <div className="item-icon streak-icon">🧊 x{item.amount}</div>
              <div className="item-cost">{item.cost}</div>
            </div>
          ))}
        </div>
      </div>

      {/* More Crystals Section */}
      <div className="shop-section">
        <h2 className="section-title">More crystals</h2>
        <p>Unleash your potential with crystals</p>
        <div className="shop-items">
          {shopItems.moreCrystals.map((item, index) => (
            <div
              key={index}
              className="shop-item"
              onClick={() => buyItem(item)}
            >
              <div className="item-icon crystal-icon">💎 x{item.amount}</div>
              <div className="item-cost">{item.cost}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
