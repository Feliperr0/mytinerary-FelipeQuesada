import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleSidebar} className="fixed top-1/2 left-0 bg-blue-500 text-white p-2 rounded-r-lg transform -translate-y-1/2 z-40">
        {isOpen ? 'Close' : '>'}
      </button>

      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-30`}>
        <nav className="flex flex-col items-center justify-center h-full p-4">
          <ul className="space-y-4">
            <li>
              <NavLink to="/cities" className="text-lg hover:underline block text-center">Cities</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-lg hover:underline block text-center">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/profile" className="text-lg hover:underline block text-center">Profile</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
