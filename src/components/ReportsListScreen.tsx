import React from 'react';

export const ReportsListScreen: React.FC<{ user: { id: string; username: string; role: string } | null }> = ({ user }) => {
  return (
    <div className="container mt-5">
      <h1>Reports</h1>
      <p>Welcome, {user?.username}. This is the reports screen.</p>
      {/* In a real app, you would have a list of reports */}
    </div>
  );
};
