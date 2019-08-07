import React from 'react';
import PropTypes from 'prop-types';


const Header = () => (
    <nav className="header navbar navbar-expand-lg pl-5" style={{overflowX: 'hidden'}}>
        <a className="navbar-brand" href="#">VAT Checker</a>
        <div className="collapse navbar-collapse float-right" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact </a>
                </li>
            </ul>
        </div>
    </nav>
);

Header.defaultProps = {
    title: 'App'
};

Header.propTypes = {
    title: PropTypes.string
};

export { Header };