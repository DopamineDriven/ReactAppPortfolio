import React from "react";
import './Navbar.css';
// import Container from '../Container/Container.jsx'
import AminoLogo from '../images/misc/AminoLogo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {

    // use state expanded and setExpanded onClick
    // circle back
  return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
            <Link
                to="/" 
                className="navbar-brand">
                <img src={AminoLogo} alt="amino" className="img-fluid" height="99.66px" width="225px"/>
            </Link>
            
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>
        <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link 
                            to="/" 
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/home"
                                ? "nav-link active"
                                : "nav-link"
                            }>
                            About
                        </Link>
                    </li>
                    &nbsp;|&nbsp;
                    <li className="nav-item">
                        <Link
                            to="/search" 
                            className={
                                window.location.pathname === "/contact"
                                    ? "nav-link active"
                                    : "nav-link" 
                            }>
                            Contact
                        </Link>
                    </li>
                    &nbsp;|&nbsp;
                    <li className="nav-item">
                        <Link
                            to="/saved" 
                            className={
                                window.location.pathname === "/portfolio"
                                ? "nav-link active"
                                : "nav-link"
                            }>
                            Portfolio
                        </Link>
                    </li>
                </ul>
           </div>
    </nav>
    </React.Fragment>
  )
}

export default Navbar;