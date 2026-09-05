import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const PurchaseOrderDetailScreen: React.FC<{ user: { id: string; username: string; role: string } | null }> = ({ user }) => {
  const { id } = useParams<{ id: string }>();

  // Mock data for the PO
  const po = {
    id: Number(id),
    poNumber: 'PO001',
    vendor: 'Vendor A',
    date: '2026-08-01',
    status: 'Open',
    items: [
      { id: 1, description: 'Item 1', quantity: 10, received: 5 },
      { id: 2, description: 'Item 2', quantity: 5, received: 5 },
    ],
  };

  return (
    <div className="container mt-5">
      <h1>Purchase Order Details</h1>
      <p>Welcome, {user?.username}.</p>
      <div className="row mb-3">
        <div className="col-md-6">
          <p><strong>PO Number:</strong> {po.poNumber}</p>
          <p><strong>Vendor:</strong> {po.vendor}</p>
          <p><strong>Date:</strong> {po.date}</p>
          <p><strong>Status:</strong> {po.status}</p>
        </div>
        <div className="col-md-6 text-end">
          <Link to="/purchase-orders" className="btn btn-outline-secondary">
            Back to List
          </Link>
          <button className="btn btn-primary ms-2">Edit</button>
        </div>
      </div>
      <hr />
      <h2>Items</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Received</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {po.items.map((item) => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.received}</td>
              <td>
                <button className="btn btn-sm btn-outline-primary">Receive</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
