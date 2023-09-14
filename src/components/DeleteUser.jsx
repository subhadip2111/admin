import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { deleteUser } from "../Store/userSlice";
import { useDispatch } from "react-redux";

const DeleteUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    // Make a DELETE request to delete the user
    axios
      .delete(`https://sweede.app/DeliveryBoy/delete-Employee/${id}`)
      .then(() => {
        setIsDeleted(true);

        // Dispatch the deleteUser action to update the Redux store
        dispatch(deleteUser(id));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4 text-red-600">Delete User</h2>
      {isDeleted ? (
        <div className="text-center">
          <h3 className="text-2xl text-green-600 mb-2">User Deleted</h3>
          <p className="text-gray-600">
            You have successfully deleted your account.
          </p>
          <Link to="/" className="text-blue-500 hover:underline">
            Go back to Home
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
          <p className="text-red-600">
            Are you sure you want to delete your account?
          </p>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none"
            >
              Delete
            </button>
            <Link to="/" className="text-blue-500 hover:underline">
              Cancel
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteUser;
