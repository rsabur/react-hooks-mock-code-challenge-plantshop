import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')

  const handleNewPlants = (e) => {
    e.preventDefault()

    const newPlantObj = {
        name,
        image,
        price,
      }

    fetch(`http://localhost:6001/plants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlantObj)
    })
      .then(res => res.json())
      .then(d => console.log(d))
  }

  return (
    <div className="new-plant-form" onSubmit={handleNewPlants} >
      <h2>New Plant</h2>
      <form>
        <input value={name} type="text" name="name" placeholder="Plant name" />
        <input value={image} type="text" name="image" placeholder="Image URL" />
        <input value={price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

