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
      .then(plantsArr => setPlants(plantsArr))
  }, [])

  const searchFilter = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const addPlant = (newPlant) => {
    const updatedPlants = [...plants, newPlant]
    setPlants(updatedPlants)
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearchTerm={setSearchTerm} />
      <PlantList plants={searchFilter} />
    </main>
  );
}

export default PlantPage;
