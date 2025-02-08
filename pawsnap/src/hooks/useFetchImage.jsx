// pawsnap\src\hooks\useFetchImage.jsx
import React from "react";
import { useState, useEffect } from "react";

function useFetchImage(animalType) {
  const [image, setImage] = useState("");

  const API_URLS = {
    CAT: "https://api.thecatapi.com/v1/images/search",
    DOG: "https://api.thedogapi.com/v1/images/search",
    FOX: "https://randomfox.ca/floof/",
  };

  const fetchImage = async () => {
    const response = await fetch(API_URLS[animalType]);
    const data = await response.json();
    if (animalType === "FOX") {
      setImage(data.image);
    } else if (animalType === "CAT" || animalType === "DOG") {
      setImage(data[0].url);
    }
  };

  useEffect(() => {
    fetchImage(); // Fetch an image when the hook is used
  }, [animalType]); // Refetch when the animal type changes

  return [image, fetchImage];
}

export default useFetchImage;
