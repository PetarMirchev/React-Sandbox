import './App.css';
import About from './components/AboutPage/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar1 from './components/Navbar1';
import Page404 from './components/Page404';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutPage/AboutUs';
import Mission from './components/AboutPage/Mission';
import OurValues from './components/AboutPage/OurValues';
import ListProducts from './components/Characters/ListProducts';
import SingleProductPage from './components/Characters/SingleProductPage';

function App() {
  return (
    <div className="App">
      <Navbar1/>

      <Routes>
        <Route path='/' element={<Home/>} />

        {/* ************************************************************************************** */}
        {/* example of nested routing (using <Outlet />) in About: */}
        <Route path='/about' element={<About/>}>
          <Route path='us'element={<AboutUs/>} />
          <Route path='mission' element={<Mission/>}/>
          <Route path='values' element={<OurValues/>}/>       
        </Route>
        {/* ******************************************************************************************** */}

        {/* render all products (call <CardBox/>) & after click render single product by ':id' */}
        <Route path='/characters' element={<ListProducts/>}/> 
        <Route path='/characters/:id' element={<SingleProductPage/>}/>

        {/* ************************************************************************************************* */}

        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
