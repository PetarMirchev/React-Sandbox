import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './about.css';


const About = () => {
  return (
    <div>
        <h1>About Page</h1>
        <p>click down to render nested routes! (/about/us), (/about/mission), (/about/values) :</p>
          {/* **************************************************** */}
            {/* //magic nested route: */}
              <nav className='small-navbar'>
                  <Link to="us"><p>About Us</p></Link>
                  <Link to="mission"><p>Mission</p></Link>
                  <Link to="values"><p>Our Values</p></Link>
              </nav>

              <Outlet />
          {/* ********************************************* */}
      
    </div>
  )
}

export default About