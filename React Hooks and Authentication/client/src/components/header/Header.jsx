import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../contexts/authContext';

const Header = () => {

    const { isAuthenticated, username } = useContext(AuthContext); //username: auth.username || auth.email, //isAuthenticated: !!auth.accessToken,


  return (
        <header>
                <h1><Link className="home" to="/">GamesPlay</Link></h1>
                <nav>
                    <Link to="/games">All games</Link>

                    {/* user i login in app */}
                    {isAuthenticated && (
                        <div id="user">
                            <Link to="/games/create">Create Game</Link>
                            <Link to="/logout">Logout</Link>

                            <span>|{username}|</span>
                        </div>
                    )}

                    {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                    )}
                </nav>
        </header>
  )
}

export default Header