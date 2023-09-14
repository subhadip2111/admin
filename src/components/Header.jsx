// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <div className="bg-gray-800 text-white py-4 text-center">
//       <h1 className="text-4xl font-bold">Welcome to Admin Table</h1>
//       <nav className="bg-gray-800 p-4">
//         <div className="container mx-auto flex justify-center items-center">
//           <ul className="space-x-4 flex">
//             <li className="text-white hover:text-gray-300">
//               <Link to="/">Home</Link>
//             </li>
//             <li className="bg-green-500 hover:bg-red-600 text-white px-2 py-1 rounded-md focus:outline-none">
//               <Link to="/createUser"> Create new user</Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa"; // You may need to install react-icons package

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Admin</h1>
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

