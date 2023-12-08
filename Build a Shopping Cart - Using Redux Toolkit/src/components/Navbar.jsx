import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../features/cartSlice';


const Navbar = () => {

  const { cart, totalQuantity } = useSelector( (state) => state.allCart);

  //rerender for show numbers in BTN:
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);




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
            <button className="btn btn-outline-success my-2 my-sm-0">
              <Link to={'/cart'}>Card ({totalQuantity})</Link>
            </button>
        </div>
        </nav>
    </div>
  )
}

export default Navbar