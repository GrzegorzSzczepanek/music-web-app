// src/components/SearchBar.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../../AuthProvider'; // Correct import path
import './SearchBar.css';

const SearchBar = () => {
    const { isLoggedIn, logout } = useAuth();

    return (
        <div className="search-bar">
            <form action="#" className='search-form'>
                <a className='searchBtn'>
                    <FontAwesomeIcon icon={faSearch} />
                </a>
                <input className='search-box' type="text" placeholder="Search" />
            </form>
            {isLoggedIn ? (
                <div className='side-stuff'>
                    <div>Notification Icon</div>
                    <div>Profile Name</div>
                    <div>User Icon</div>
                    <button onClick={logout} className="logout-button">Logout</button>
                </div>
            ) : (
                <div className='side-stuff'>
                    <a href="/login" className="login">Login</a>
                    <a href="/sign-up" className="register">Register</a>
                </div>
            )}
        </div>
    );
}

export default SearchBar;