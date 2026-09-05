import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { LoginScreen } from './components/LoginScreen';
import { ItemLookupScreen } from './components/ItemLookupScreen';
import { ReceivingScreen } from './components/ReceivingScreen';
import { PurchaseOrderListScreen } from './components/PurchaseOrderListScreen';
import { PurchaseOrderDetailScreen } from './components/PurchaseOrderDetailScreen';
import { ReportsListScreen } from './components/ReportsListScreen';

function App() {
  const [user, setUser] = useState<{ id: string; username: string; role: string } | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulate checking for existing token
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ id: '1', username: 'testuser', role: 'admin' });
    }
    setLoading(false);
  }, []);

  const login = (username: string, password: string) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser({ id: '1', username, role: 'admin' });
        localStorage.setItem('token', 'mock-token');
        resolve();
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <div className="App">
        <NavBar user={user} logout={logout} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={user ? <ItemLookupScreen user={user} /> : <LoginScreen login={login} />} />
            <Route path="/login" element={<LoginScreen login={login} />} />
            <Route path="/item-lookup" element={user ? <ItemLookupScreen user={user} /> : <LoginScreen login={login} />} />
            <Route path="/receiving" element={user ? <ReceivingScreen user={user} /> : <LoginScreen login={login} />} />
            <Route path="/purchase-orders" element={user ? <PurchaseOrderListScreen user={user} /> : <LoginScreen login={login} />} />
            <Route path="/purchase-orders/:id" element={user ? <PurchaseOrderDetailScreen user={user} /> : <LoginScreen login={login} />} />
            <Route path="/reports" element={user ? <ReportsListScreen user={user} /> : <LoginScreen login={login} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
