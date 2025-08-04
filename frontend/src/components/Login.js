import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login - no actual authentication
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <h1>Intern Portal</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <button onClick={() => alert('Sign up would go here')}>Sign Up</button></p>
    </div>
  );
};

export default Login;