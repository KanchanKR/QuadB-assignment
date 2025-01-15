/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logo.png';
import { FiMenu, FiSearch, FiLayout, FiMoon, FiSun } from "react-icons/fi";
import { toggleTheme } from '../../store/themeSlice';

const Navbar = ({ toggleSidebar }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode); // Get current theme (light/dark) from Redux state

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md px-4 py-2 flex items-center justify-between">
      {/* Hamburger Menu */}
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="text-2xl focus:outline-none"
        >
          <FiMenu />
        </button>
        {/* Logo */}
        <div className="ml-4 text-xl font-bold">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <button className="text-2xl focus:outline-none">
          <FiSearch />
        </button>
        <button className="text-2xl focus:outline-none">
          <FiLayout />
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={() => dispatch(toggleTheme())}
          className="text-2xl focus:outline-none"
        >
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
