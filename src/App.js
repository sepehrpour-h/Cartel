import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
  console.log('App Component Rendered'); // در اینجا لاگ بزنید

  return (
    <Router>
      <Routes>
        {/* Layout مربوط به صفحات احراز هویت */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          {/* می‌توانید مسیرهای دیگری مثل /signup را هم اضافه کنید */}
        </Route>

        {/* Layout مربوط به صفحات اصلی */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          {/* مسیرهای دیگر صفحات اصلی مانند /dashboard را اینجا اضافه کنید */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

