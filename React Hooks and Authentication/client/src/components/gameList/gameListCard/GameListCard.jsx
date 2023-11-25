import React from 'react';
import {Link} from 'react-router-dom';

const GameListCard = ({ title, category, _id, imageUrl }) => {
  return (
    <div>
        <h1>GameListCard</h1>
         <div className="allGames">
            <div className="allGames-info">
                <img src={imageUrl}  alt='randomImage game'/>
                <h6>{category}</h6>
                <h2>{title}</h2>
                <Link to={`/games/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    </div>
  )
}

export default GameListCard