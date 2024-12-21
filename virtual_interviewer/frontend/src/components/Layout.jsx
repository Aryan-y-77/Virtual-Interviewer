import React from "react";
import { Outlet, useLocation } from 'react-router-dom';
import HomeHeader from './Header/HomeHeader';
import DashboardHeader from './Header/DashboardHeader';
import Footer from './Footer/Footer';

function Layout() {
  const location = useLocation();

  const renderHeader = () => {
    if (location.pathname === '/') {
      return <HomeHeader />;
    } else {
      return <DashboardHeader />;
    }
  };

  return (
    <>
      {renderHeader()}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
