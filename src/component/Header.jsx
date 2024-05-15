import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
function Header() {
    const [state,setState]=useState(false)
    const handleClick=()=>{
        setState(!state)
    }
    return (

        <div className='headers '>
            <div className='headers__width'>
                <h1 >Books</h1>
                <p className='header_icons' onClick={handleClick}><CiMenuBurger  fontSize={20} className='fw-bold'/></p>
            </div>
            <div className="headers__width">
              
                <div className={ state ? "header__content " :"headers__none  header__content pt-2"}>
                    <h5>Home</h5>
                    <h5>About</h5>
                </div>
            </div>
        </div>





    )
}

export default Header