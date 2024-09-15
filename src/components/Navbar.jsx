import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/des-frontend-react">Home</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/forms">Forms</Link></li>
            </ul>
            <span>Bienvenido :</span>
        </nav>
    );
};

export default Navbar;