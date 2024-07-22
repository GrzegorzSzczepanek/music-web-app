import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './FormStyles.css'; // Ensure this import matches your styles

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password1 !== password2) {
      setMessage("Passwords don't match!");
      return;
    }
    try {
      const response = await fetch('http://127.0.0.1:5000/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          username,
          password1,
          password2,
        }),
      });

      const data = await response.json();

      if (response.status === 201) {
        setMessage('Account created!');
        navigate('/login');
        // Redirect to home page or handle sign-up success
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('An unexpected error occurred. Please try again.');
      console.error('Sign up error:', error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="header">Sign Up</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
          required
        />
        <input
          className="input"
          type="password"
          placeholder="Confirm Password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
        />
        <button type="submit" className="submit-btm">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignUp;
