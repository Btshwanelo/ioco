import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './Navbar.css'

const Home = () => {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  };
  
  const About = () => {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  };
  const Blog = () => {
    return (
      <div>
        <h1>Blog</h1>
      </div>
    );
  };
  const Contact = () => {
    return (
      <div>
        <h1>Contact Us</h1>
      </div>
    );
  };

const Navbar = () => {

    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

	return (
        <div>
        <div className={click ? "main-container" : ""} onClick={()=>Close()} />
         <nav className="navbar" onClick={(e)=>e.stopPropagation()}>
           <div className="nav-container">
             <NavLink exact to="/" className="nav-logo">
               CodeBucks
               <i className="fa fa-code"></i>
             </NavLink>
   
             <ul className={click ? "nav-menu active" : "nav-menu"}>
               <li className="nav-item">
                 <NavLink
                   exact
                   to="/"
                   activeClassName="active"
                   className="nav-links"
                   onClick={click ? handleClick : null}
                 >
                   Home
                 </NavLink>
               </li>
               <li className="nav-item">
                 <NavLink
                   exact
                   to="/about"
                   activeClassName="active"
                   className="nav-links"
                   onClick={click ? handleClick : null}
                 >
                   About
                 </NavLink>
               </li>
               <li className="nav-item">
                 <NavLink
                   exact
                   to="/blog"
                   activeClassName="active"
                   className="nav-links"
                   onClick={click ? handleClick : null}
                 >
                   Blog
                 </NavLink>
               </li>
               <li className="nav-item">
                 <NavLink
                   exact
                   to="/contact"
                   activeClassName="active"
                   className="nav-links"
                  onClick={click ? handleClick : null}
                 >
                   Contact Us
                 </NavLink>
               </li>
             </ul>
             <div className="nav-icon" onClick={handleClick}>
               <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
             </div>
           </div>
         </nav>
       </ div>
	);
};

export default Navbar;

