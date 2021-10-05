import React, {useState} from 'react';
import {MenuItems} from './MenuItems';
import { Link } from 'react-router-dom';
import './Dropdown.css';

function Dropdown(){
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return(
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item,index) => {
                     if(index < 5)
                        return (
                            <li key={index}>
                                <Link to='/Products' className={item.cName} onClick={() => setClick(false)}>
                                    {item.title}
                                </Link>
                            </li>

                        )
                })}


            </ul>
        </>
    )
}
export default Dropdown;