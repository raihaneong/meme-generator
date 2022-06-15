import React, {useState} from 'react'
import './Meme.css'

import memesData from '../../Constant/memesData'

function Meme() {

  // const [memeImage, setMemeImage] = useState('https://i.imgflip.com/1bij.jpg')


  const [meme, setMeme] = useState({
    topText: 'goodbye',
    bottomText : 'world',
    randomImage : 'https://i.imgflip.com/1bij.jpg'
})
  const [allMemeImages, setAllMemeImages] = useState(memesData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    console.log(url)
    setMeme(prevMeme => ({
      ...prevMeme, randomImage: url
    }))


  }
  
  return (
    <div className="Meme">
      <div className="Meme__form">
        <input className='form__input' type="text" placeholder="Top text" />
        <input className='form__input' type="text" placeholder="Bottom text" />
        <button onClick={getMemeImage} className='form__button' type="button" >Get a new Meme Image 🖼️</button>
      </div>
      <img src={meme.randomImage}  />
    </div>
  )
}

export default Meme






