import React, { useState } from "react";

function PlantCard({ id, name, image = "https://via.placeholder.com/400", price }) {
  const [stock, setStock] = useState(true)
  const handleStockButton = () => {
    setStock(stock => !stock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button onClick={handleStockButton} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockButton} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;

