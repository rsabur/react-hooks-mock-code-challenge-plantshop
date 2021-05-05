import React, {useState} from "react";

function NewPlantForm({ addPlant }) {
  const [newPlant, setNewPlant] = useState('')

  const handleNewPlantForm = (e) => {
    e.preventDefault()
    console.log("works")

    const plantObj = {
      plants: {
        name,
        image,
        price
      }
    }
    
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(plantObj)
    })
    .then(res => res.json())
    .then(data => console.log(data))

  }

  return (
    <div className="new-plant-form" onSubmit={handleNewPlantForm}>
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
