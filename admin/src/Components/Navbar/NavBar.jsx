import React from 'react';
import navlogo from '../../assets/nav-logo.svg';
import navProfile from '../../assets/nav-profile.svg';

const NavBar = () => {
  return (
    <div
      style={{ boxShadow: '0 1px 3px -2px #000' }}
      className="navbar flex items-center justify-between py-4 px-6 md:py-3 md:px-4 lg:py-5 lg:px-12 bg-white"
    >
      <img
        className="nav-logo w-32 md:w-40 lg:w-48"
        src={navlogo}
        alt="Nav Logo"
      />
      <img
        className="nav-profile w-12 md:w-16 lg:w-20"
        src={navProfile}
        alt="Nav Profile"
      />
    </div>
  );
};

export default NavBar;
