import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

const Navbar = ({currentPage, handlePageChange}) => {
    return (
        <div>
        <nav className="navbar navbar-expand-md navbar-light">
            <div className='container'>
                <a className="navbar-brand ml-auto" href="#"><span>Tiffany Bryan</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color:"white"}} />
                </button>
                <div className="collapse navbar-collapse ml-auto" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active p-4">
                            <a className="nav-link " href="#about" onClick ={() => handlePageChange("About") }><span>About Me</span></a>
                        </li>
                        <li className="nav-item p-4">
                            <a className="nav-link" href="#portfolio" onClick={() => handlePageChange('Portfolio')}><span>Protfolio</span></a>
                        </li>
                        <li className="nav-item p-4">
                            <a className="nav-link" href="#resume" onClick={()=> handlePageChange('Resume')}><span>Resume</span></a>
                        </li>
                        <li className="nav-item p-4">
                            <a className="nav-link" href="#contact" onClick={()=> handlePageChange('Contact')}><span>Contact</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default Navbar;
