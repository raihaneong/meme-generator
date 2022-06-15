import React from 'react';
import './Header.css'

import {TrollFace} from '../../Constant/image'

function Header() {
  return (
    <header className="Header">
      <img src={TrollFace} alt="Troll Face" className="header__image"/>
      <h2 className="header__title"> Meme Generator </h2>
      <h4 className="header__project">React Course - Project 3</h4>
    </header>
  )
}

export default Header