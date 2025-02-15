// pawsnap\src\hooks\useFetchImage.jsx
import React from "react";
import { useState } from "react";



function useFetchImage(animalType) {
  const [image, setImage] = useState("");

  const API_URLS = {
    CAT: "https://api.thecatapi.com/v1/images/search",
    DOG: "https://api.thedogapi.com/v1/images/search",
    FOX: "https://randomfox.ca/floof/",
  };

  const fetchImage = async () => {
    console.log("Animal Type: ", animalType);
    const response = await fetch(API_URLS[animalType]);
    const data = await response.json();
    if (animalType === "FOX") {
      setImage(data.image);
    } else {
      setImage(data[0].url);
    }
    console.log("Fetched Data: ", data);
  };

  return [image, fetchImage];
}

export default useFetchImage;
