import React from 'react';

export const ItemLookupScreen: React.FC<{ user: { id: string; username: string; role: string } | null }> = ({ user }) => {
  return (
    <div className="container mt-5">
      <h1>Item Lookup</h1>
      <p>Welcome, {user?.username}. This is the item lookup screen.</p>
      {/* In a real app, you would have a form to look up items */}
    </div>
  );
};
