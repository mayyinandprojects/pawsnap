// pawsnap\src\components\AnimalSelector.jsx
import React, { useState } from "react";
import useFetchImage from "../hooks/useFetchImage";


function AnimalSelector() {
  const [selectedAnimal, setSelectedAnimal] = useState("CAT"); 
  const [image, fetchImage] = useFetchImage(selectedAnimal);


  return (
    <>
      <button onClick={() => setSelectedAnimal("CAT")}>😺 Cat</button>
      <button onClick={() => setSelectedAnimal("DOG")}>🐶 Dog</button>
      <button onClick={() => setSelectedAnimal("FOX")}>🦊 Fox</button>

      {/* Show the image */}
      {image && <img className = "animalImage" src={image} alt={`A random ${selectedAnimal.toLowerCase()}`} />}
      
      {/* Fetch a new image on click */}
      <button onClick={fetchImage}>🔄 Generate {selectedAnimal.toLowerCase()} pictures</button>
    </>
  );
}

export default AnimalSelector;