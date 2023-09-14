import React from "react";
import DeleteUser from "./DeleteUser";
import { Link } from "react-router-dom";

const UserDetails = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <Link >
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Add New User
        </button>
      </Link>
      <ul className="list-disc pl-4 mt-4">
        <li>Hi</li>
        <li>Hiiii</li>
      </ul>
      <hr className="my-4" />
      <DeleteUser />
    </div>
  );
};

export default UserDetails;
