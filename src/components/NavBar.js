import React, {useState} from 'react';
import {Button} from './Button';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';
import './Navbar.css';
import Dropdown from './Dropdown';


function  NavBar(){
  // const history = useHistory();
  const [click, setClick] = useState(false);
  const [dropdown,setDropDown] = useState(false);
  const handleClick = () => setClick(!click);
  const history = useHistory();
  const closeMobileMenu = () => setClick(false);
  function refreshPage(){ 
    window.location.href = '/about'
    };
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
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            {/* don not have the page for products yet */}
            <Link to='/product' className='nav-links' onClick={closeMobileMenu}>
              Products <i className='fas fa-caret-down'/>
            </Link>
          </li>
          <li className='nav-item'>
            {/* don not have the page for services yet */}
            <Link to='/about' className='nav-links' onClick={refreshPage}>
              About Us <i className='fas fa-caret-down'/>
            </Link>
            {/* <div>
            <button onClick={refreshPage} type="button" />
            About Us */}
            {/* </div> */}
          </li>
          <li className='nav-item'>
            {/* don not have the page for contact yet */}
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Contact <i className='fas fa-caret-down'/>
            </Link>
          </li>
          {dropdown && <Dropdown/>}
          <li className='nav-item'>
            {/* don not have the page for signup yet */}
            <Link to='/sign-up' className='nav-links'>
              <Button/>
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