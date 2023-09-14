import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../Store/userSlice";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  id: 386,
  FirstName: "",
  LastName: "",
  DOB: "",
  Study: "",
  StartDate: "",
  EndDate: "",
  CurrentSalary: 1234,
  Description: " Welcome",
};


const CreateUser = () => {
     const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialFormData);
const navigate=useNavigate()
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
      const response = await axios.post(
        "https://sweede.app/DeliveryBoy/Add-Employee/",
        formData
      );
      console.log("User created:", response.data);
      setFormData(initialFormData);
      dispatch(addUser(response.data));
navigate("/")
      // You cnavigatean add further actions upon success, such as redirection or displaying a success message.
    } catch (error) {
      console.error("Error creating user:", error);
      // Handle error responses here.
    }
  };

  return (
    <div className="w-1/2 mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4  text-amber-400">Create User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4" >
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
            rows="4"
          ></textarea>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
