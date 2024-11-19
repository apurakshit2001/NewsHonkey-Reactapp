import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">NewsHonkey🤖</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/">Home</NavLink></li>
                                <li className="nav-item"><NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/business">Business</NavLink></li>
                                <li className="nav-item"><NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/entertainment">Entertainment</NavLink></li>
                                <li className="nav-item"><NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/general">General</NavLink></li>
                                <li className="nav-item"><NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/health">Health</NavLink></li>
                                <li className="nav-item"><NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/science">Science</NavLink></li>
                                <li className="nav-item"><NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/sports">Sports</NavLink></li>
                                <li className="nav-item"><NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} to="/technology">Technology</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
