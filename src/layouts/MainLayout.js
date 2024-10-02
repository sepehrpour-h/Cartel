import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <header>Main Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Main Footer</footer>
    </div>
  );
};

export default MainLayout;