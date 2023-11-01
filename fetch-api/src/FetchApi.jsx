import React, { useEffect, useState } from 'react'

const FetchApi = (props) => {

    const [characters, setCharacters] = useState([]);
    //console.log(characters);

    useEffect(() => {  //! async () => {try .... catch(err){... } } --> is now WORKING!!! only .then & .catch
        fetch(`https://swapi.dev/api/people`)  //https://swapi.dev/
        .then((response) => response.json())
        .then((data) => {
            setCharacters(data.results) //{... results: Array(10)} 
            //(data) => console.log(data)
           })
        .catch((error) => console.log(error))
    }, []);


  return (
    <div>
        <h1>FetchApi</h1>
        <ul>
            {characters.map( (char) => //0: {name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', …}
                <li key={char.url}>{char.name}</li>   //"url": "https://swapi.dev/api/people/7/"
            )}
        </ul>
    </div>
  )
}

export default FetchApi