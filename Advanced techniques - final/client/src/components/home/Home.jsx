import React, { useEffect, useState } from 'react';

import * as gameService from '../../services/gameService';
import LatestGameCard from './LatestGameCard';


const Home = () => {

    const [latestGames, setLatestGames] = useState([]);

    useEffect( () => {
        gameService.getLatest().then( data => setLatestGames(data)).catch(err =>  console.log(err, 'error on load last posts!'));
    }, []);

  return (
    <section id="welcome-world">

        <div className="welcome-message">
            <h2>ALL new games are</h2>
            <h3>Only in GamesPlay</h3>
        </div>
        <img src="./images/four_slider_img01.png" alt="hero" />

        <div id="home-page">
            <h1>Latest Games</h1>

            {latestGames.map( game => <LatestGameCard {...game} />)}
         
            
            {!latestGames.length && <p className="no-articles">No games yet</p>}
            
        </div>
    </section>
  )
}

export default Home