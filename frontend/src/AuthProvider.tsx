// src/AuthProvider.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface AuthContextProps {
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
    message: string;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const login = (token: string) => {
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
    };

    const logout = async () => {
        try {
            // const response = await fetch('http://127.0.0.1:5000/logout', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': `Bearer ${localStorage.getItem('token')}`
            //     },
            // });
            // const data = await response.json();
            // if (data.success) {
            //     localStorage.removeItem('token');
            //     setIsLoggedIn(false);
            //     setMessage('Logged out successfully');
            // }
            localStorage.removeItem('token');
            setIsLoggedIn(false);
            setMessage('Logged out successfully');
            window.location.reload();
        } catch (error) {
            setMessage('Logout failed');
        }
    };

    const value = {
        isLoggedIn,
        login,
        logout,
        message,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
