import React, {useState} from 'react';
import './style.css';
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {

    const [search, setSearch] = useState(false);

    const submitSearch = (e) => {
        e.preventDefault();
        alert("Searched");
    }

    const openSearch = () => {
        setSearch(true);
    }
    const searchClass= search ?'searchInput active':'searchInput';

    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/post">Post</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input type="text" className={searchClass} placeholder="Search"/>
                    <img onClick={openSearch} className="logosearch" src={require('../../assets/icon/search-32.png')} alt="Search"/>
                </form>

            </div>
        </div>
    );
};

export default Navbar;