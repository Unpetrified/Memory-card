import { useState, useEffect } from "react";
import shuffle from "../helper-functions/array_shuffler";

export default function Game({ s, sScore }) {
  function shuffleArray(e) {
    const target_key = e.target.parentNode.getAttribute("data-key");

    // image has not been clicked
    if (!clicked.includes(target_key)) {
      const newScore = { ...s };
      newScore.current = s.current + 1;
      newScore.current >= newScore.best
        ? (newScore.best = newScore.current)
        : "";
      sScore(newScore);
      setClicked([...clicked, target_key]);

      // check if player has won the game
      if (clicked.length === images.length - 1) {
        alert("You win!");
        newScore.best = newScore.current;
        newScore.current = 0;
        sScore(newScore);
        setClicked([]);
      }
    }

    // player failed to click all images once
    if (clicked.includes(target_key)) {
      setClicked([]);
      const newScore = { ...s };
      newScore.current = 0;
      sScore(newScore);
    }
    setImages(shuffle(images));
  }

  function extractImageDetails(api_response_arr) {
    const images_details = [];
    api_response_arr.map((arr_item) => {
      const img_details = {
        src: arr_item.src.medium,
        alt: arr_item.alt,
        key: crypto.randomUUID(),
      };
      images_details.push(img_details);
    });
    return shuffle(images_details);
  }

  const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

  const PHOTO_IDS = [
      16253352, 1648349, 14823947, 16734963, 2065635, 25946301, 13499745,
      242200, 62276, 8281124, 4094769, 3991204,
    ],
    [loading, setLoading] = useState(true),
    [images, setImages] = useState([]),
    [clicked, setClicked] = useState([]);

  // generate images on page load
  useEffect(() => {
    Promise.all(
      PHOTO_IDS.map((id) =>
        fetch(`https://api.pexels.com/v1/photos/${id}`, {
          headers: {
            Authorization: PEXELS_API_KEY,
          },
        }).then((res) => res.json())
      )
    )
      .then((results) => {
        setImages(extractImageDetails(results));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Could not fetch photos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <ul className="game">
      {images.map((img) => {
        return (
          <li key={img.key} onClick={shuffleArray} data-key={img.key}>
            <img className="memory-img" src={img.src} alt={img.alt} />
            {loading ? <p>Images are loading</p> : ""}
          </li>
        );
      })}
    </ul>
  );
}
