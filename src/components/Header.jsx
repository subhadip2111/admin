
import React from "react";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa"; // 

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Employee Management System
        </h1>
        <nav>
          <ul className="space-x-4 flex justify-center">
            <li className="text-white hover:text-gray-300">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link
                to="/createUser"
                className="flex items-center bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md focus:outline-none"
              >
                <FaUserPlus className="mr-2" /> Create User
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

