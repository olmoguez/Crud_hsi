import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const [accounts, setAccounts] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    newUsers: 0,
    inactiveUsers: 0
  });

  useEffect(() => {
    const savedAccounts = JSON.parse(localStorage.getItem('accounts') || '[]');
    setAccounts(savedAccounts);
    
    setStats({
      totalUsers: savedAccounts.length,
      activeUsers: Math.floor(savedAccounts.length * 0.8),
      newUsers: Math.floor(savedAccounts.length * 0.2),
      inactiveUsers: Math.floor(savedAccounts.length * 0.1)
    });
  }, []);

  return (
    <div className="container mt-4">
      <nav className="navbar navbar-light bg-light mb-4">
        <span className="navbar-brand h1">Dashboard</span>
        <div>
          <button 
            onClick={() => window.location.href = '/Home'}
            className="btn btn-primary me-2"
          >
            Admin
          </button>
          <button 
            onClick={() => window.location.href = '/login'}
            className="btn btn-warning"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="row mb-4">
        <div className="col-md-3 mb-3">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h6 className="card-title">Total Users</h6>
              <h2 className="mb-0">{stats.totalUsers}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h6 className="card-title">Active Users</h6>
              <h2 className="mb-0">{stats.activeUsers}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card bg-info text-white">
            <div className="card-body">
              <h6 className="card-title">New Users</h6>
              <h2 className="mb-0">{stats.newUsers}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card bg-warning text-white">
            <div className="card-body">
              <h6 className="card-title">Inactive Users</h6>
              <h2 className="mb-0">{stats.inactiveUsers}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-4">Recent Users</h5>
          <div className="table-responsive">
            <table className="table">
              <thead className="bg-light">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {accounts.slice(0, 5).map((account, index) => (
                  <tr key={index}>
                    <td>{account.fname} {account.lname}</td>
                    <td>{account.email}</td>
                    <td>{account.username}</td>
                    <td>
                      <span className="badge bg-success">Active</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title mb-4">Quick Actions</h5>
          <button className="btn btn-primary me-2">Add New User</button>
          <button className="btn btn-secondary me-2">Generate Report</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;