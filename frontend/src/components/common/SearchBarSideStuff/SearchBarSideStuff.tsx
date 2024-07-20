import React from 'react'
import { useAuth } from '../../../AuthProvider'; 


const SearchBarSideStuff = () => {
    const { isLoggedIn, logout } = useAuth();
    return (
        <div className='side-stuff'>
            {isLoggedIn ? (
                <>
                    <div>Notification Icon</div>
                    <div>Profile Name</div>
                    <button onClick={logout} className="logout-button">Logout</button>
                </>
            ) : (
                <>
                    <a href="/login" className="login">Login</a>
                    <a href="/sign-up" className="register">Register</a>
                </>
            )}
        </div>
    );
}

export default SearchBarSideStuff;
