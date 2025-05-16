import { useState } from "react";
import shuffle from "../helper-functions/array_shuffler";

export default function Game({ c, b, setC, setB }) {
  function shuffleArray(e) {
    const target_key = e.target.getAttribute("data-key");

    if (!clicked.includes(target_key)) {
      setC(c + 1);
      c >= b ? setB(c + 1) : "";
      setClicked([...clicked, target_key]);
      if (clicked.length === images.length - 1) {
        alert("You win!");
        setB(c + 1);
        setC(0);
        setClicked([]);
      }
    }

    if (clicked.includes(target_key)) {
      setClicked([]);
      setC(0);
    }

    let newArr = shuffle(images);
    setImages(newArr);
  }

  const [images, setImages] = useState(
    shuffle([
      { val: 1, key: crypto.randomUUID() },
      { val: 2, key: crypto.randomUUID() },
      { val: 3, key: crypto.randomUUID() },
      { val: 4, key: crypto.randomUUID() },
      { val: 5, key: crypto.randomUUID() },
      { val: 6, key: crypto.randomUUID() },
      { val: 7, key: crypto.randomUUID() },
      { val: 8, key: crypto.randomUUID() },
      { val: 9, key: crypto.randomUUID() },
      { val: 10, key: crypto.randomUUID() },
      { val: 11, key: crypto.randomUUID() },
      { val: 12, key: crypto.randomUUID() },
    ])
  );

  const [clicked, setClicked] = useState([]);

  return (
    <ul className="game">
      {images.map((img) => {
        return (
          <li key={img.key} onClick={shuffleArray} data-key={img.key}>
            {img.val}
          </li>
        );
      })}
    </ul>
  );
}
