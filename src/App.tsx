// src/App.tsx
import React from 'react';
import AppRoutes from './Components/Routes/appRoutes'; // Import the route config

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRoutes /> {/* This should render your defined routes */}
    </div>
  );
}

export default App;
