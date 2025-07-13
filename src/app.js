import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import routes from './routes';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <main style={{ padding: '1rem' }}>
            <Routes>
              {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;