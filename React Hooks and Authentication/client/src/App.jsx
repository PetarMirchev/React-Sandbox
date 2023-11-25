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


function App() {
  return (
    <AuthProvider>
        <div id="box">
            <Header/>

            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/games' element={ <GameList/>}/>
              <Route path='/games/create' element={ <GameCreate/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/games/:gameId' element={<GameDetails/>} />
              <Route path='/games/:gameId/edit' element={<GameEdit/>} />
              <Route path='/logout' element={<Logout/>} />
            </Routes>
            {/* path={Path.Logout} -->from "Path from "../../paths";" same as ---> path='/logout' */}
        </div>
    </AuthProvider>
  );
}

export default App;
