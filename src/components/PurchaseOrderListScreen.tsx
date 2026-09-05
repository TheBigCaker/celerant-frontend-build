import React from 'react';
import { Link } from 'react-router-dom';

export const PurchaseOrderListScreen: React.FC<{ user: { id: string; username: string; role: string } | null }> = ({ user }) => {
  // Mock data
  const purchaseOrders = [
    { id: 1, poNumber: 'PO001', vendor: 'Vendor A', date: '2026-08-01', status: 'Open' },
    { id: 2, poNumber: 'PO002', vendor: 'Vendor B', date: '2026-08-02', status: 'Closed' },
  ];

  return (
    <div className="container mt-5">
      <h1>Purchase Orders</h1>
      <p>Welcome, {user?.username}.</p>
      <Link to="/purchase-orders/create" className="btn btn-primary mb-3">
        Create New PO
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>PO Number</th>
            <th>Vendor</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
          </thead>
        <tbody>
          {purchaseOrders.map((po) => (
            <tr key={po.id}>
              <td>{po.poNumber}</td>
              <td>{po.vendor}</td>
              <td>{po.date}</td>
              <td>{po.status}</td>
              <td>
                <Link to={`/purchase-orders/${po.id}`} className="btn btn-sm btn-outline-primary">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
