import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

const SearchBar = () => {
    // Assuming you have a variable called `isLoggedIn` that indicates whether the user is logged in or not
    const isLoggedIn = true; // Replace with your actual logic

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
                    {/* Display notification icon and profile name with user icon */}
                    {/* Replace the following code with your actual implementation */}
                    <div>Notification Icon</div>
                    <div>Profile Name</div>
                    <div>User Icon</div>
                </div>
            ) : (
              
            <div className='side-stuff'>
            <a href="/login" className="login">Login</a>
            <a href="/register" className="register">Register</a>
        </div>  
            )}

        </div>
    );
}

export default SearchBar;