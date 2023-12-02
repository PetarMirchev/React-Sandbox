import { Routes, Route} from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import GameCreate from './components/gameCreate/GameCreate';
import GameList from './components/gameList/GameList';
import GameDetails from './components/gameDetails/GameDetails';
import GameEdit from './components/gameEdit/GameEdit';
import Logout from './components/logout/Logout';
import AuthGuard from './guards/AuthGuard';


function App() {
  return (
    <AuthProvider>
        <div id="box">
            <Header/>

            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/games' element={ <GameList/>}/>
              <Route path='/login' element={<Login/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/games/:gameId' element={<GameDetails/>} />

              {/* protected routes from  unauthorized access! (nested Route) */}
              {/* http://localhost:3000/games/501dbd78-4b3b-477b-9ed1-007b4040092f/edit */}
              <Route element={<AuthGuard />} >
                <Route path='/games/create' element={ <GameCreate/>} />
                <Route path='/logout' element={<Logout/>} />
                <Route path='/games/:gameId/edit' element={<GameEdit/>} />
              </Route>
            </Routes>
            {/* path={Path.Logout} -->from "Path from "../../paths";" same as ---> path='/logout' */}
        </div>
    </AuthProvider>
  );
}

export default App;
