import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'


// clicking on '<Button as={Link} to={`/characters/${id}`} variant='primary'>Details</Button>'
// will redirect you hear & 'fetch' the correct info for the element 'id'.

const SingleProductPage = () => {

    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.pathname);

    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
        .then((response) => {
            if(!response.ok){
                throw new Error('Not found');
            }
            return response.json();
        })
        .then(setCharacter)
        .catch((error) => {
            navigate('/characters'); // or to "/404"  //!  <-- const navigate = useNavigate();
        });
    },[id]);

  return (
    <div>
        <h1>{character.name}</h1>
        <p>---------------------------------------</p>
        <p> {character.hair_color}</p>
        <p> {character.eye_color}</p>
        <p>{character.birth_year}</p>
        <p>{character.gender}</p>
        <p>licking on: Button as=Link to=`/characters/${id}` variant='primary'/ Details /Button</p>
        <p>redirect you hear & 'fetch' the correct info for the element 'id'.</p>
    </div>
  )
}

export default SingleProductPage