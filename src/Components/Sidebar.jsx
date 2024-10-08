import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar () {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleSidebar} className="fixed top-1/2 left-0 bg-blue-500 text-white p-2 rounded-r-lg transform -translate-y-1/2 z-40">
        {isOpen ? 'Close' : '>'}
      </button>

      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-30 `}>
        <nav className="p-4">
          <ul>
            <li className="mb-4">
              <NavLink to="/cities" className="text-lg hover:underline">Cities</NavLink>
            </li>
            <li className="mb-4">
              <NavLink to="/about" className="text-lg hover:underline">About Us</NavLink>
            </li>
            <li className="mb-4">
              <NavLink to="/profile" className="text-lg hover:underline">Profile</NavLink>
            </li>
            <li className="mb-4">
              <NavLink to="/search" className="text-lg hover:underline">Search Destinations</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}