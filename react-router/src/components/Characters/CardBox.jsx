import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const CardBox = ({id, name, hair_color, eye_color, birth_year, gender}) => {
  return (
    <div>
        <h2>Card</h2>

        <div className="card text-center">
            <div className="card-header">{name}</div>
            <div className="card-body">
                <h5 className="card-title">bio info:</h5>
                <p className="card-text">hair_color: {hair_color}</p>
                <p className="card-text">eye_color: {eye_color}</p>
                <p className="card-text">birth_year: {birth_year}</p>
                <p className="card-text">gender: {gender}</p>
                {/* `/characters/${id}` --> rout is set in App.js  */}
                <Button as={Link} to={`/characters/${id}`} variant='primary'>Details</Button>
            </div>
        </div>
    </div>
  )
}

export default CardBox