import React from 'react';

export const ReceivingScreen: React.FC<{ user: { id: string; username: string; role: string } | null }> = ({ user }) => {
  return (
    <div className="container mt-5">
      <h1>Receiving</h1>
      <p>Welcome, {user?.username}. This is the receiving screen.</p>
      {/* In a real app, you would have a form to process receiving */}
    </div>
  );
};
