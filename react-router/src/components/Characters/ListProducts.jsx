import React, { useEffect, useState } from 'react';
import CardBox from './CardBox';


const base_url = 'https://swapi.dev/api';

const ListProducts = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        

        fetch(`${base_url}/people`)
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results);
                console.log(data.results);
            });

    }, []);

    return (
        <div>
            {characters.map((character, index) =>
            //! this call <CardBox/> to render all products information!
                <CardBox key={character.name} id={index + 1} {...character} />
            )}
        </div>
    );
};

export default ListProducts