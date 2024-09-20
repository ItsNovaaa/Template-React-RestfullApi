import React, { useState } from 'react';
import { loginService } from './loginService'; // Import the login service
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>(''); // Store email
  const [password, setPassword] = useState<string>(''); // Store password
  const [error, setError] = useState<string>(''); // Store error message if login fails
  const navigate = useNavigate(); // To navigate to another page after login

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form default action
    setError(''); // Reset error state

    try {
      await loginService(email, password); // Call the login service to authenticate
      navigate('/dashboard'); // Navigate to the dashboard page upon successful login
    } catch (err) {
      setError('Invalid login credentials'); // Set error message if login fails
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '1rem' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
