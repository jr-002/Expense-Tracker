import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

// Placeholder Pages (to be created later)
const Dashboard = () => <div className="p-4"><h2>Dashboard</h2><p>Welcome to your expense tracker!</p></div>;
const AddExpensePage = () => <div className="p-4"><h2>Add Expense</h2><p>Form to add expenses will go here.</p></div>;
const ReportsPage = () => <div className="p-4"><h2>Reports</h2><p>Expense reports and charts will be shown here.</p></div>;
const SettingsPage = () => <div className="p-4"><h2>Settings</h2><p>User settings (currency, theme) will be configured here.</p></div>;
const LoginPage = () => <div className="p-4"><h2>Login</h2><p>Login form using Supabase Auth will be here.</p></div>;

// Basic Navbar Component
const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4">
    <ul className="flex space-x-4">
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/add">Add Expense</Link></li>
      <li><Link to="/reports">Reports</Link></li>
      <li><Link to="/settings">Settings</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </nav>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<AddExpensePage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

