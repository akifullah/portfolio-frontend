import React, { useState } from 'react'
import "./Navbar.css"
// import { Link } from "react-router-dom";
import {Link} from 'react-scroll'
const Navbar = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    const navHandle = () => {
        // alert("Hello")

        setIsNavActive((preState) => !preState)
    }

    const removeNav = () => {
        setIsNavActive(false)
    }

    return (
        <>
            <nav className={isNavActive ? "top-nav active" : "top-nav"} id='topNav'>
                <div className='d-flex align-items-center'>
                    <button className='toggler' onClick={navHandle}>
                        <span></span>
                    </button>

                    <h3>Akif</h3>
                </div>


                <div className='navs'>
                    <ul >
                        <li><Link onClick={removeNav} activeClass="active" to="header" spy={true} offset={-50} delay={0} smooth={true}>Home</Link></li>
                        <li><Link onClick={removeNav}  to="about" spy={true} offset={-50} delay={0} smooth={true}>About</Link></li>
                        <li><Link onClick={removeNav}  to="resume" spy={true} offset={-50} delay={0} smooth={true}>Resume</Link></li>
                        <li><Link onClick={removeNav}  to="portfolio" spy={true} offset={-50} delay={0} smooth={true}>Portfolio</Link></li>
                        <li><Link onClick={removeNav}  to="contact" spy={true} offset={-50} delay={0} smooth={true}>Contact</Link></li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Navbar
