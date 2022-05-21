import React, { useState } from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const Navbar = (props) => {
    const [currentPage] = useState("About");

    const renderPage = () => {
        switch (currentPage) {
          case "About":
            return <About />;
          case "Portfolio":
            return <Portfolio />;
          case "Contact":
            return <Contact />;
          case "Resume":
            return <Resume />;
    
          default:
            return <About />;
        }
      };
    

    return (
        <nav className="navbar">
            <h1>Tiffany</h1>
            <div className="links">
                <li>
                    <a href="/" onClick={() => renderPage}>About</a>
                    <a href="/" onClick={() => renderPage}>Portfolio</a>
                    <a href="/">Contact</a>
                    <a href="/">Resume</a>
                </li>
            </div>
        </nav>
    );
}

export default Navbar;