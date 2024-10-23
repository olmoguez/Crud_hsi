import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    profileImage: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      profileImage: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password === formData.confirmPassword && formData.email === formData.confirmEmail) {
      localStorage.setItem('userData', JSON.stringify(formData));

      console.log('User registered:', formData);
      navigate('/login');
    } else {
      console.log('Passwords or Emails do not match');
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
        <div className="col-md-6 offset-md-3">
          <div className="signup-form">
            <form className="mt-5 border p-4 bg-light shadow" onSubmit={handleSubmit}>
              <h4 className="mb-5 text-secondary text-center">Create Your Account</h4>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label>First Name<span className="text-danger">*</span></label>
                  <input
                    type="text"
                    name="fname"
                    className="form-control"
                    placeholder="Enter First Name"
                    value={formData.fname}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label>Last Name<span className="text-danger">*</span></label>
                  <input
                    type="text"
                    name="lname"
                    className="form-control"
                    placeholder="Enter Last Name"
                    value={formData.lname}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-md-12">
                  <label>Username<span className="text-danger">*</span></label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-md-12">
                  <label>Email Address<span className="text-danger">*</span></label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-md-12">
                  <label>Confirm Email Address<span className="text-danger">*</span></label>
                  <input
                    type="email"
                    name="confirmEmail"
                    className="form-control"
                    placeholder="Confirm Email Address"
                    value={formData.confirmEmail}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-md-12">
                  <label>Password<span className="text-danger">*</span></label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-md-12">
                  <label>Confirm Password<span className="text-danger">*</span></label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-md-12">
                  <label htmlFor="profile-image">Profile Image</label>
                  <input
                    type="file"
                    id="profile-image"
                    className="form-control"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-warning float-end">Register</button>
                </div>
              </div>
            </form>
            <p className="text-center mt-3 text-secondary">If you have an account, please <Link to="/login">Login Now</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
