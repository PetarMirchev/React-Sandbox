import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import * as gameService from '../../services/gameService';
import * as commentService from '../../services/commentService';


const GameDetails = () => {

  const { gameId } = useParams(); // call from ROUTER to get the specific ID --> /c64db398-91cd-487c-b900-86058c0422f8
  const [ game, setGame] = useState({});
  const [ comments, setComments] = useState([]);


  useEffect(() => {
      gameService.getOne(gameId).then((data) => setGame(data)).catch((err) => console.log(err));

      //.then((data) => setComments(data)) <--- is same as ---> .then(setComments)
      commentService.getAll(gameId).then(setComments).catch((err) => console.log(err));

  }, [gameId]);


  const addCommentHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget); //get from FORM input --> name="username", name="comment"...
    const newCommentAdd = await commentService.create(gameId, formData.get('username'), formData.get('comment'));

    //console.log(newCommentAdd);
    //take the current State & add new item --> to do that spread (...) old data and add new
    setComments(state => [...state, newCommentAdd]);
  };


  return (
    <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">
            <div className="game-header">
                <img className="game-img" src={game.imageUrl} alt={game.title} />
                <h1>{game.title}</h1>
                <span className="levels">MaxLevel: {game.maxLevel}</span>
                <p className="type">{game.category}</p>
            </div>

            <p className="text">{game.summary}</p>

            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {comments.map(({ _id, username, text }) => (
                      <li key={_id} className='comment'>
                          <p>{username}: {text}</p>
                      </li>
                    ))}
                </ul>

                {comments.length === 0 && ( // return [] --> 'Test game', 'Fantasy', '112', ....
                    <p className="no-comment">No comments.</p>
                )}
            </div>

            {/* <!-- Edit/Delete buttons ( Only for creator of this game )  -->
            <div className="buttons">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
            </div> */}
        </div>

        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={addCommentHandler}>
                <input type="text" name="username" placeholder="username" />
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    </section>
  )
}

export default GameDetails