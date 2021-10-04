import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import img from '../utilities/images/logo.jpg'



const Header = () => {
    const activeStyle = {
        color: "#8a048ac0"
    }
    
    return (
        <header>
            <nav className="navbar-style">
                <div className="d-flex align-items-center">
                    <img className="logo-img me-3" src={img} alt="" />
                    <div>
                        <span className="title">A. U.</span>
                        <h6>Academy University</h6>
                    </div>

                </div>

                <div>
                    <NavLink className="navlink-style" exact to="/home" activeStyle={activeStyle} >Home</NavLink>
                    <NavLink className="navlink-style" exact to="/about" activeStyle={activeStyle} >About</NavLink>
                    <NavLink className="navlink-style" exact to="/services" activeStyle={activeStyle} >Services</NavLink>
                    <NavLink className="navlink-style" exact to="/admission" activeStyle={activeStyle} >Admission</NavLink>
                </div>
            </nav>
           
        </header>
    );
};

export default Header;