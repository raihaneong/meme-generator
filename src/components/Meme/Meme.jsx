import React, { useState } from "react";
import "./Meme.css";

import memesData from "../../Constant/memesData";

function Meme() {
  // const [memeImage, setMemeImage] = useState('https://i.imgflip.com/1bij.jpg')

  const [meme, setMeme] = useState({
    topText: "goodbye",
    bottomText: "world",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  console.log(meme);
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function handleChange(event) {
    const {name, value} = event.target
    setMeme((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value
      };
    });
  }

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log(url);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          className="form--input"
          type="text"
          placeholder="Top text"
          name="firstName"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="form--input"
          type="text"
          placeholder="Bottom text"
          name="lastName"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImage} className="form--button" type="button">
          Get a new Meme Image 🖼️
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="meme images" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText} </h2>
      </div>
    </main>
  );
}

export default Meme;
