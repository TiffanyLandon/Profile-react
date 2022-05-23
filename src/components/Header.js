import React,{useState} from "react";
import Navbar from "./Navbar";
import About from "./About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";

const Header = () => {
    const [currentPage, handlePageChange] = useState("About");

    // The renderPage method uses a switch statement to render the appropriate current page
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
        <div className="header-wrapper">
            <div className="main-info">
                <Navbar
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}>
                </Navbar>
                <main>
                    <div>{renderPage(currentPage)}</div>
                </main>
            </div>
        </div>

    );
}

export default Header;