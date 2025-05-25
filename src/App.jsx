import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/LoginForm';
import { 
  HomeIcon, 
  PlusCircleIcon, 
  ChartBarIcon, 
  CogIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

const StatCard = ({ title, value, description, icon: Icon }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 transition-all duration-200 hover:shadow-md">
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <Icon className="h-12 w-12 text-indigo-600" />
      </div>
      <div className="ml-5">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <div className="mt-1">
          <p className="text-2xl font-semibold text-indigo-600">{value}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="py-8 px-4 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <Link
        to="/add"
        className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <PlusCircleIcon className="h-5 w-5 mr-2" />
        Add Expense
      </Link>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <StatCard
        title="Total Expenses"
        value="$2,450.00"
        description="This month"
        icon={(props) => <ChartBarIcon {...props} />}
      />
      <StatCard
        title="Categories"
        value="8"
        description="Active categories"
        icon={(props) => <CogIcon {...props} />}
      />
      <StatCard
        title="Latest Entry"
        value="Today"
        description="Last expense recorded"
        icon={(props) => <HomeIcon {...props} />}
      />
    </div>

    <div className="mt-8">
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">Recent Expenses</h3>
          <div className="mt-4 divide-y divide-gray-200">
            {/* Placeholder for recent expenses list */}
            <p className="py-4 text-sm text-gray-500">No recent expenses to show</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AddExpensePage = () => (
  <div className="py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Add Expense</h1>
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <form className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                step="0.01"
                className="block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="0.00"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>Food & Dining</option>
              <option>Transportation</option>
              <option>Shopping</option>
              <option>Entertainment</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              rows="3"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Add notes about this expense..."
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

const ReportsPage = () => (
  <div className="py-8 px-4 sm:px-6 lg:px-8">
    <h1 className="text-2xl font-bold text-gray-900 mb-8">Reports</h1>
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Spending by Category</h3>
        <div className="aspect-w-16 aspect-h-9 bg-gray-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Chart will be implemented here</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Monthly Trend</h3>
        <div className="aspect-w-16 aspect-h-9 bg-gray-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Chart will be implemented here</p>
        </div>
      </div>
    </div>
  </div>
);

const SettingsPage = () => (
  <div className="py-8 px-4 sm:px-6 lg:px-8">
    <h1 className="text-2xl font-bold text-gray-900 mb-8">Settings</h1>
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow-sm rounded-lg overflow-hidden divide-y divide-gray-200">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Display Name</label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                disabled
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-50 cursor-not-allowed sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Preferences</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Currency</label>
              <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">
                Enable email notifications
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">ExpenseTracker</span>
            </Link>
            {user && (
              <div className="hidden md:flex items-center space-x-8 ml-10">
                <Link 
                  to="/" 
                  className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <HomeIcon className="h-5 w-5 mr-2" />
                  Dashboard
                </Link>
                <Link 
                  to="/add" 
                  className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <PlusCircleIcon className="h-5 w-5 mr-2" />
                  Add Expense
                </Link>
                <Link 
                  to="/reports" 
                  className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <ChartBarIcon className="h-5 w-5 mr-2" />
                  Reports
                </Link>
                <Link 
                  to="/settings" 
                  className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <CogIcon className="h-5 w-5 mr-2" />
                  Settings
                </Link>
              </div>
            )}
          </div>
          <div className="flex items-center">
            {user ? (
              <button
                onClick={signOut}
                className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="max-w-7xl mx-auto">
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