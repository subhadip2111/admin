import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../Store/userSlice";
import { useNavigate, useParams } from "react-router-dom";
const initialFormData = {
  id: 386,
  FirstName: "",
  LastName: "",
  DOB: "",
  Study: "",
  StartDate: "",
  EndDate: "",
  CurrentSalary: 1234,
  Description: "Welcome",
};
const Update = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector(state => state.user);
  console.log("user from update",user);
 useEffect(() => {
    // Check if the user data exists in the Redux store and is not empty
    if (user && Object.keys(user).length > 0) {
      setFormData({
        FirstName: user.FirstName,
        LastName: user.LastName,
        DOB: user.DOB,
        Study: user.Study,
        StartDate: user.StartDate,
        EndDate: user.EndDate,
        CurrentSalary: user.CurrentSalary,
        Description: user.Description,
      });
    }
  }, [user])


 

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {


    const updatedFields = {};

    // Check if each field has changed, and if so, add it to the updatedFields object
    for (const key in formData) {
      if (formData[key] !== initialFormData[key]) {
        updatedFields[key] = formData[key];
      }
    }

    
    if (Object.keys(updatedFields).length > 0) {
      const response = await axios.post(
        `https://sweede.app/DeliveryBoy/update-Employee/${id}`,
        updatedFields
      );

    
      dispatch(updateUser(response.data));

      // Clear the form data after a successful update
      setFormData(initialFormData);

      // Navigate to the home page
      navigate("/");
    } else {
      // If no fields have changed, display a message or handle it as needed
      console.log("No fields have changed.");
    }

  

    // Navigate to the home page
    navigate("/");
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error("Server Error:", error.response.data);
      console.error("Status Code:", error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No Response Received:", error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.error("Request Error:", error.message);
    }
  }
};

  return (
    <div className="w-1/2 mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4  text-amber-400">Update User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-red-700 font-semibold mb-2">
            First Name:
          </label>
          <input
            type="text"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
            className="px-3 py-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block  text-red-700 font-semibold mb-2">
            Last Name:
          </label>
          <input
            type="text"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            className="px-3 py-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block  text-red-700 font-semibold mb-2">
            Date of Birth:
          </label>
          <input
            type="date"
            name="DOB"
            value={formData.DOB}
            onChange={handleChange}
            className="px-3 py-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block  text-red-700 font-semibold mb-2">
            Study:
          </label>
          <input
            type="text"
            name="Study"
            value={formData.Study}
            onChange={handleChange}
            className="px-3 py-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block  text-red-700 font-semibold mb-2">
            Start Date:
          </label>
          <input
            type="date"
            name="StartDate"
            value={formData.StartDate}
            onChange={handleChange}
            className="px-3 py-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block  text-red-700 font-semibold mb-2">
            End Date:
          </label>
          <input
            type="date"
            name="EndDate"
            value={formData.EndDate}
            onChange={handleChange}
            className="px-3 py-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block  text-red-700 font-semibold mb-2">
            Current Salary:
          </label>
          <input
            type="number"
            name="CurrentSalary"
            value={formData.CurrentSalary}
            onChange={handleChange}
            className="px-3 py-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description:
          </label>
          <textarea
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            className="px-3 py-2 border rounded-md w-full"
            required
            rows="4"
          ></textarea>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;

