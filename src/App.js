
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import FooterComponent from './components/common/Footer';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import HomePage from './components/home/HomePage';
// import AdminPage from './components/admin/AdminPage';
// import { ProtectedRoute, AdminRoute } from './service/guard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />


            {/* <Route path="/admin"
              element={<AdminRoute element={<AdminPage />} />}
            /> */}

            

         
            {/* <Route path="*" element={<Navigate to="/login" />} /> */}
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;