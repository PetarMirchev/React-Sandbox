import React, { useEffect, useState } from 'react';
import * as gameService from '../../services/gameService';
import GameListCard from './gameListCard/GameListCard';

const GameList = () => {

  const [games, setGames] = useState([]);

  useEffect(() => {
      gameService.getAllData()
      .then((data) => setGames(data))
      .catch( error => console.log(error) ); 
  }, []);


  //console.log(games);

  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      
        {games.map(game => (
            <GameListCard key={game._id} {...game} /> // {...game}  ---> { title, category, _id, imageUrl }
        ))}

        {games.length === 0 && (
            <h3 className="no-articles">No articles yet</h3>
        )}
    </section>
  )
}

export default GameList