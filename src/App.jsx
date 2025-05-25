import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/LoginForm';

// Placeholder Pages (to be created later)
const Dashboard = () => <div className="p-4"><h2>Dashboard</h2><p>Welcome to your expense tracker!</p></div>;
const AddExpensePage = () => <div className="p-4"><h2>Add Expense</h2><p>Form to add expenses will go here.</p></div>;
const ReportsPage = () => <div className="p-4"><h2>Reports</h2><p>Expense reports and charts will be shown here.</p></div>;
const SettingsPage = () => <div className="p-4"><h2>Settings</h2><p>User settings (currency, theme) will be configured here.</p></div>;

// Basic Navbar Component
const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        {user ? (
          <>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/add">Add Expense</Link></li>
            <li><Link to="/reports">Reports</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><button onClick={signOut}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main>
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/add"
                element={
                  <PrivateRoute>
                    <AddExpensePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/reports"
                element={
                  <PrivateRoute>
                    <ReportsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <PrivateRoute>
                    <SettingsPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;