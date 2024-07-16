import React, { useState } from "react";
import { useAuth } from '../AuthProvider';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import styles from './FormStyles.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const isAuthenticated = localStorage.getItem('token');

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.status === 200) {
                login(data.token);
                setMessage('Login successful');
                navigate('/');
            } else {
                setMessage('Login failed');
            }
        } catch (error) {
            setMessage('Login failed');
        }
    };

    return (
        <div className="form-container">
            <h2 className="header">Login</h2>
            <form className="form" onSubmit={handleSubmit}>
                <input className="input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input className="input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="submit-btm">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
