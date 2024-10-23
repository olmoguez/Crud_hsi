import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    
    if (username && password) {
      console.log('Logging in with:', { username, password });
      navigate('/Dashboard');
    } else {
      console.log('Please fill in all fields');
    }
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url('/hsi.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="signup-form">
          <form className="mt-5 border p-4 bg-light shadow" onSubmit={handleLogin}>
            <h2 className="mb-5 text-dark text-center fw-bold">| Highly Succeed Inc.</h2>
            <h4 className="mb-5 text-secondary text-center">Log in Your Account</h4>
              <div className="row">
                <div className="mb-3 col-md-12">
                  <label>Username<span className="text-danger">*</span></label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3 col-md-12">
                  <label>Password<span className="text-danger">*</span></label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-warning float-end">Log In</button>
                </div>
              </div>
            </form>
            <p className="text-center mt-3 text-secondary">Don't have an account? <Link to="/registration">Register here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
