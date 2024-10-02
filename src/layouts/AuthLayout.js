import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <header>Authentication Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Authentication Footer</footer>
    </div>
  );
};

export default AuthLayout;