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
 
  const onMouseEnter = () =>{
    if(window.innerWidth < 960){
      setDropDown(false)
    }else{
      setDropDown(true)
    }
  };
  const onMouseLeave = () =>{
    if(window.innerWidth < 960){
      setDropDown(false)
    }else{
      setDropDown(false)
    }
  };

  function refreshPage(link){ 
    window.location.href = link
  }

  function both(link){
    refreshPage(link);
    setClick(false)
}
  
  return (
    <>
      <nav className='navbar'>
        <Link to='/my-roller-skate' className='navbar-logo' onClick={() => {refreshPage('/my-roller-skate')}}>
          MyRolerSkates
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            {/* <Link to='/my-roller-skate' className='nav-links' OnClick={() => {refreshPage('/my-roller-skate')}}>
              Home
            </Link> */}

            <Link to='/my-roller-skate' className='nav-links' onClick={() => {refreshPage('/my-roller-skate')}}>
            Home
            </Link>
          </li>
          <li className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <Link to='/purchase' className='nav-links' onClick={() => {refreshPage('/purchase')}}>
             Products<i className='fas fa-caret-down'/>
            </Link>
            {dropdown && <Dropdown/>}
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={() => {refreshPage('/about')}}>
              About Us <i className='fas fa-caret-down'/>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contactUs' className='nav-links' onClick={() => {refreshPage('/contactUs')}}>
              Contact Us
            </Link>
          </li>
          <li className='nav-item'>
            {/* don not have the page for signup yet */}
            <Link to='/sign-up' className='nav-links'>
              <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Sign Up!
              </Button>
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