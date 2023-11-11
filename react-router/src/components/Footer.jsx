import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div>
        <footer className="bg-light text-center text-lg-start">
            {/* <!-- Copyright --> */}
            <div className="text-center p-3" id='footer-info-text'>
                © 2023 Copyright: 
                <a className="text-dark" href="/"> --react router demo--</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
    </div>
  )
}

export default Footer