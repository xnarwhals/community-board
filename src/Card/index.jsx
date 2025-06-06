import './index.css'
import { useState } from 'react';

function Card({gameName, genre, link, image, rating, platform, releaseDate, studio, hasRemake, metacriticScore}) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`}>
            <div className="card-content">
                <div className="front">
                    <img src={image} alt={gameName} />
                    <h3>{gameName}</h3>
                    <p>Genre: {genre}</p>
                    <button onClick={handleFlip} className="base-btn">Details</button>
                </div>
                <div className="back">
                    <h3>{gameName}</h3>
                    <div className="game-details">
                        <p><strong>Rating:</strong> {rating}</p>
                        <p><strong>Platform:</strong> {platform}</p>
                        <p><strong>Release Date:</strong> {releaseDate}</p>
                        <p><strong>Studio:</strong> {studio}</p>
                        <p><strong>Has Remake:</strong> {hasRemake ? 'Yes' : 'No'}</p>
                        <p><strong>Metacritic Score:</strong> {metacriticScore}</p>
                    </div>
                    <a href={link} target='_blank' rel="noopener noreferrer" className="play-btn">Play Now</a>
                    <button onClick={handleFlip} className="base-btn">Back</button>
                </div>
            </div>
        </div>
    )
}

export default Card;