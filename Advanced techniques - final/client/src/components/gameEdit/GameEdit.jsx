import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as gameService from '../../services/gameService';

const GameEdit = () => {

    const navigate = useNavigate(); //for relocate user after editing
    const { gameId } = useParams(); //get the specific game by ID
    const [game, setGame] = useState({ //set initial state of the game info
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    });


    useEffect(() => { //populate the game data from Fetch!
        gameService.getOne(gameId).then( game => setGame(game)).catch(err => console.log(err));
    }, [gameId]);


    const onChange = (e) => { //handler for updating input information in move
        setGame(state => ({
            ...state, //spreed previous state & change only new staff from input
            [e.target.name]: e.target.value,
        }));
    };



    const editGameSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await gameService.edit(gameId, values);

            navigate('/games')
        } catch (error) {
            console.log(err);
        }
    };


  return (
        <section id="create-page" className="auth">
            <form id="create"  onSubmit={editGameSubmitHandler}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={game.title} onChange={onChange} placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={game.category} onChange={onChange} placeholder="Enter game category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" value={game.maxLevel} onChange={onChange} min="1" placeholder="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={game.imageUrl} onChange={onChange} placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" value={game.summary} onChange={onChange} id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />
                </div>
            </form>
        </section>
  )
}

export default GameEdit