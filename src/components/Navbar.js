import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                TRVL <i className='fab fa-typo3' />   
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
            </div>
           <ul className={click ? 'nav-menu-active' : 'nav-menu'}></ul>
           <li className='nav-item'>
             <Link to='/' className='nav-links'></Link>
           </li>

            
        </div>
      </nav>
    </>
  );
}

export default Navbar;
