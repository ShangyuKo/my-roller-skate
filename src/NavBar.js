import React, {useState} from 'react';
import {Button} from './button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function  NavBar(){
  const {click, setClick} = useState(false);
  // handleClick reports error here
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          myrolerskates
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            {/* don not have the page for services yet */}
            <Link to='/servicecs' className='nav-links'>
              Servives <i className='fas fa-caret-down'></i>
            </Link>
          </li>
          <li className='nav-item'>
            {/* don not have the page for products yet */}
            <Link to='/servicecs' className='nav-links'>
              Products <i className='fas fa-caret-down'></i>
            </Link>
          </li>
          <li className='nav-item'>
            {/* don not have the page for contact yet */}
            <Link to='/servicecs' className='nav-links'>
              Contact <i className='fas fa-caret-down'></i>
            </Link>
          </li>
          <li className='nav-item'>
            {/* don not have the page for signup yet */}
            <Link to='/servicecs' className='nav-links'>
              Sign-Up 
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}






// const NavBar = () => {
//     return ( 
//         <nav className="navbar">
//             <h1>My Roller Skate</h1>
//             {/* <div className="links">
//                 <a href='/'>Home</a>
//             </div> */}
//             <div class="wrapper">
//         <nav>
//           <div class="logo">LOGO</div>
//           <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Blog</a></li>
//             <li><a href="#">Contact</a></li>
//             <li><a class="active" href="#">Log In</a></li>
//           </ul>
//          </nav>
//        </div>
//         </nav>
//     );
// }
 
export default NavBar;