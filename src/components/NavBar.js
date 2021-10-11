import React, {useState} from 'react';
import {Button} from './Button';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';
import './Navbar.css';
import Dropdown from './Dropdown';
import Signup from "./sign_up_in_page/sign_up";
// import Signin from "./sign_up_in_page/sign_in";

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
            <Signup/>
          </li>
          {/* <li className='nav-item'>
            <Signin/>
          </li> */}
        </ul>
      </nav>
    </>
  )
}

 
export default NavBar;