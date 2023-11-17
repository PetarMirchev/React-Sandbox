import React, { useEffect, useState } from 'react';
import * as gameService from '../../services/gameService';

const GameList = () => {

  const [games, setGames] = useState([]);

  useEffect(() => {
      gameService.getAll()
      .then((data) => setGames(data));
    
  }, []);


  console.log(games);

  return (
    <section id="catalog-page">
    <h1>All Games</h1>
    {/* 
    {games.map(game => (
        <GameListItem key={game._id} {...game} />
    ))}

    {games.length === 0 && (
        <h3 className="no-articles">No articles yet</h3>
    )} */}

</section>
  )
}

export default GameList