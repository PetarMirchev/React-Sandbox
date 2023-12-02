import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';

import * as gameService from '../../services/gameService';
import * as commentService from '../../services/commentService';
import AuthContext from '../../contexts/authContext';
import reducer from './commentReducer';
import useForm from '../../hooks/useForm';


const GameDetails = () => {

  const { gameId } = useParams(); // call from ROUTER to get the specific ID --> /c64db398-91cd-487c-b900-86058c0422f8
  const [ game, setGame] = useState({});
  

  const navigate = useNavigate();
  const { email, userId } = useContext(AuthContext);
  //const [ comments, setComments] = useState([]);  // v1.0
  const [ comments, dispatch] = useReducer(reducer, []); // v2.0


  useEffect(() => {
    gameService.getOne(gameId).then((data) => setGame(data)).catch((err) => console.log(err));
    
    //   //.then((data) => setComments(data)) <--- is same as ---> .then(setComments)
    //   commentService.getAll(gameId).then(setComments).catch((err) => console.log(err)); //v1.0
    //v2.0
    commentService.getAll(gameId).then((result) => {
        dispatch({ //action?.type & action.payload -- whiting to be send!
            type: "GET_ALL_COMMENTS",
            payload: result,
        });
    });
  }, [gameId]);


//   const addCommentHandler = async (e) => { // v1.0
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget); //get from FORM input --> name="username", name="comment"...
//     const newCommentAdd = await commentService.create(gameId, formData.get('username'), formData.get('comment'));

//     //console.log(newCommentAdd);
//     //take the current State & add new item --> to do that spread (...) old data and add new
//     setComments(state => [...state, newCommentAdd]);
//   };


  const addCommentHandler2 = async (values) => {
    const newComment = await commentService.create(gameId, values.comment);

    newComment.owner = { email }; //push email (or username) of the creator

    dispatch({
        type: "ADD_COMMENT",
        payload: newComment
    })
  };

  const  {values, onChange, onSubmit} = useForm(addCommentHandler2, { comment: '', });



  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(`Are you want to delete ${game.title}?`);

    if(hasConfirmed){ //YES!
        await gameService.remove(gameId);

        navigate(`/games`);
    }
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
                    {comments.map(({ _id, text, owner: {email} }) => (
                      <li key={_id} className='comment'>
                          <p>{email}: {text}</p>
                      </li>
                    ))}
                </ul>

                {comments.length === 0 && ( // return [] --> 'Test game', 'Fantasy', '112', ....
                    <p className="no-comment">No comments.</p>
                )}
            </div>



            {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
            {userId === game._ownerId && (
            <div className="buttons">
                <Link to={`/games/${gameId}/edit`} className="button">Edit</Link>
                <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
            </div> 
            )}
        </div>

        <article className="create-comment">
            <label>Add new comment:</label>
            {/* <form className="form" onSubmit={addCommentHandler}> */}
            <form className="form" onSubmit={onSubmit}>
                {/* <input type="text" name="username" placeholder="username" />  //only for addCommentHandler //v1.0 */}
                <textarea name="comment" value={values.comment} onChange={onChange}  placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    </section>
  )
}

export default GameDetails