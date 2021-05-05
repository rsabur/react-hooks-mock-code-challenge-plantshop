import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(plantArr => setPlants(plantArr))
  }, [])

  const searchPlantList = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const addNewPlant = (newPlant) => {
    const updatedPlants = [...plants, newPlant]
    setPlants(updatedPlants)
  }

  return (
    <main>
      <NewPlantForm onAddPlant={addNewPlant} />
      <Search setSearchTerm={setSearchTerm} />
      <PlantList plants={searchPlantList} />
    </main>
  );
}

export default PlantPage;

