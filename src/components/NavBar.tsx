import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar: React.FC<{ user: { id: string; username: string; role: string } | null; logout: () => void }> = ({ user, logout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Celerant</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/item-lookup">Item Lookup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/receiving">Receiving</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/purchase-orders">Purchase Orders</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reports">Reports</Link>
            </li>
          </ul>
          {user ? (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <span className="navbar-text text-white">
                  Logged in as {user.username}
                </span>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-light ms-2" onClick={logout}>
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};
