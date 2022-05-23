import React from "react";

const Footer = () => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between py-3 border-top footer">
                <div className="col-md-6 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    </a>
                    <span className="text-muted">© Tiffany Bryan</span>
                </div>

                <ul className="nav col-md-4 list-unstyled d-flex">
                    <li className="ms-4"><a className="text-muted" href=""><i className="fa fa-github highlight fa-lg" aria-hidden="true"></i></a></li>
                    <li className="ms-4"><a className="text-muted" href=""><i className="fa fa-linkedin highlight fa-lg" aria-hidden="true"></i></a></li>
                    <a href='mailto: tiffanym.bryan@gmail.com'><li className="ms-4 highlight">Tiffanym.bryan@gmail.com</li></a>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;