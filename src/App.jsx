import { useState } from 'react'
import './App.css'
import Card from './Card'
import CardData from './Card/CardData'
import Invader from './assets/invader.png'

function App() {

  return (
    <>
      <div className="header">
        <img src={Invader} alt="Space Invader" className="invader left" />
        <h1>Must Play Games!</h1>
        <img src={Invader} alt="Space Invader" className="invader right" />
      </div>
      <div className="container">
        {CardData.map((game) => (
          <Card
            key={game.id}
            gameName={game.gameName}
            genre={game.genre}
            link={game.link}
            image={game.image}
            rating={game.rating}
            platform={game.platform}
            releaseDate={game.releaseDate}
            studio={game.studio}
            hasRemake={game.hasRemake}
            metacriticScore={game.metacriticScore}
          />
        ))}
      </div>
    </>
  )
}

export default App
