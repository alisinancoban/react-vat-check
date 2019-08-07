import React from 'react';
import { Main } from './Main';
import { FixedHeader } from './FixedHeader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Contact } from './Contact';

const App = () => (
    <Router>
        <div className="container">
            <FixedHeader />
            <nav className="header navbar navbar-expand-lg pl-5" style={{overflowX: 'hidden'}}>
                <a className="navbar-brand" href="">VAT Checker</a>
                <div className="collapse navbar-collapse float-right" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="mt-md-5 mx-md-5">
                <Route exact path="/" component={Main} />
                <Route path="/contact" component={Contact} />
            </div>
        </div>
    </Router>

);

export default App;