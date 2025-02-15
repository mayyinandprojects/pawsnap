// pawsnap\src\components\AnimalSelector.jsx
import React, { useState, useEffect } from "react";
import useFetchImage from "../hooks/useFetchImage";

function AnimalSelector() {
  const [selectedAnimal, setSelectedAnimal] = useState("CAT");
  const [image, fetchImage] = useFetchImage(selectedAnimal);
  useEffect(() => {
    fetchImage(); // Fetch an image when the hook is used
  }, [selectedAnimal]); // Refetch when the animal type changes

  return (
    <>
      <button data-testid="select-cat"  className={selectedAnimal === "CAT" ? "selected" : ""} onClick={() => setSelectedAnimal("CAT")}>
        😺 Cat
      </button>
      <button data-testid="select-dog"  className={selectedAnimal === "DOG" ? "selected" : ""} onClick={() => setSelectedAnimal("DOG")}>
        🐶 Dog
      </button>
      <button data-testid="select-fox"  className={selectedAnimal === "FOX" ? "selected" : ""}onClick={() => setSelectedAnimal("FOX")}>
        🦊 Fox
      </button>

      {/* Show the image */}
      {image && (
        <img
          className="animalImage"
          src={image}
          alt={`A random ${selectedAnimal.toLowerCase()}`}
        />
      )}

      {/* Fetch a new image on click */}
      <button onClick={fetchImage}>
        🔄 Generate {selectedAnimal.toLowerCase()} pictures
      </button>
    </>
  );
}

export default AnimalSelector;
