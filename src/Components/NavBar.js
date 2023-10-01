import React, { Component } from "react";
import '../Css/NavBar.css'
import {Link} from "react-router-dom";


export default class NavBar extends Component {
  render() {
    let {toggle} = this.props
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              DailyDose!!
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Fitness
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Gaming
                  </Link>
                </li>
              </ul>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" role="switch" onClick={toggle} />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">darkMode</label>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
