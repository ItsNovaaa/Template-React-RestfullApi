// src/routes/AppRoutes.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Login/Login'; // Adjust path based on your structure
import Dashboard from '../Dashboard/dashboard';
import PrivateRoute from './privateRoute'; // Import PrivateRoute

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public route for the login page */}
        <Route path="/login" element={<Login />} />

        {/* Protected route for the dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Redirect any unknown route to login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
