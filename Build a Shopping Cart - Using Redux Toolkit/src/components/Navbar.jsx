import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className="navbar-brand">Navbar</h1>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                  <Link className="nav-link" to={'/'}>All Products</Link>
              </li>
            </ul>
            <button className="btn btn-outline-success my-2 my-sm-0"><Link to={'/cart'}>Card (0)</Link></button>
        </div>
        </nav>
    </div>
  )
}

export default Navbar