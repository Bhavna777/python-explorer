import React from 'react';
import './../Css/Menu.css';
import Home from './Home';
import {Link} from 'react-router-dom';


function Menu() {
    return (
        <>
            <div className = "container-fluid nav_bar MenuStyle">
                <div className = "row">
                    <div className = "col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg">
                            <Link className="navbar-brand" to="/">20July2020</Link>
                            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <Link to="/" className="nav-link">Home<span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/CorePython">CorePython</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/AdvancePython">AdvancePython</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Project">Project</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/About">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Contact">Contact</Link>
                                    </li>
        
                                </ul>   
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </>
    );
}


export default Menu;