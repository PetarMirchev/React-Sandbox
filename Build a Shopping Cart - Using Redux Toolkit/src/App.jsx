import './App.css';
import { Route, Routes } from 'react-router-dom';
import CardPage from './components/CardPage';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={ <ProductCard/> } />
          <Route path='/cart' element={ <CardPage />} />         
        </Routes>
    </div>
  );
}

export default App;


// npm install react-redux @reduxjs/toolkit
// whataboutcoding.com/redux-toolkit-tutorial/