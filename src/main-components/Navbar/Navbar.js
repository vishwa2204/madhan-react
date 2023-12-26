import React from 'react'
import '../Navbar/Navbar.css';

import { useRef } from 'react'

import { Link } from 'react-router-dom';
import logoServe from '../../assets/images/logo/1.png'

import { CiUser } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }


    return (

        <nav className='navba'>
            <Link to="/">
                <div className="nav-container">
                    <img src={logoServe} alt="Logo" />
                    <span>Madhan's Photography</span>

                </div>
            </Link>
            <div className="nav-menus">
                <ul ref={navRef}>
                    <Link to={"/"}><li>HOME</li></Link>
                    <Link to={"about"}><li>ABOUT</li></Link>
                    <Link><li>SERVICES</li></Link>
                    <Link><li>PORTFOLIO</li></Link>
                    <Link><li>EVENTS</li></Link>
                    <Link><li>CONTACT</li></Link>
                    <Link><li className='user'><CiUser /></li></Link>
                    <button className='nav-open nav-close' onClick={showNavbar}><ImCross /></button>

                </ul>
                <button className='nav-open nav-close' onClick={showNavbar}><FaBars /></button>

            </div>
        </nav>
    )
}

export default Navbar;