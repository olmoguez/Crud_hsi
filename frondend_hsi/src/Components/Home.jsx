import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [accounts, setAccounts] = useState([]);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    username: '',
    password: '',
  });

  useEffect(() => {
    
    const savedAccounts = JSON.parse(localStorage.getItem('accounts') || '[]');
    setAccounts(savedAccounts);
  }, []);

  const handleLogout = () => {
    console.log('Logging out...');
    window.location.href = '/login';
  };

  const handleDelete = (index) => {
    const newAccounts = accounts.filter((_, i) => i !== index);
    setAccounts(newAccounts);
    localStorage.setItem('accounts', JSON.stringify(newAccounts));
  };

  const handleEdit = (index) => {
    console.log('Editing account at index:', index);
  };

  return (
    <div className="container mt-4">
  <nav className="navbar navbar-light bg-light mb-4">
    <span className="navbar-brand h1">Admin</span>
    
    <div className="d-flex">
      <button 
        onClick={() => window.location.href = '/Dashboard'}
        className="btn btn-primary me-2"
      >
        Go to Dashboard
      </button>
      
      <button 
        onClick={handleLogout}
        className="btn btn-warning"
      >
        Logout
      </button>
    </div>
      </nav>

      
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="card-title">Account List</h5>
            <button className="btn btn-link text-warning">
              <i className="fas fa-sort-down"></i>
            </button>
          </div>

          <div className="table-responsive">
            <table className="table">
              <thead className="bg-light">
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((account, index) => (
                  <tr key={index}>
                    <td>{account.fname}</td>
                    <td>{account.lname}</td>
                    <td>{account.email}</td>
                    <td>{account.username}</td>
                    <td>{account.password}</td>
                    <td>
                      <button 
                        className="btn btn-sm btn-link text-primary me-2"
                        onClick={() => handleEdit(index)}
                      >
                        ✏️
                      </button>
                      <button 
                        className="btn btn-sm btn-link text-danger"
                        onClick={() => handleDelete(index)}
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;