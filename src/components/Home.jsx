
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setUser } from "../Store/userSlice";
// import Footer from "./Footer";



















// const Home = () => {
//   const [users, setUsers] = useState([]);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     fetchData();
//   }, );

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         "https://sweede.app/DeliveryBoy/Get-Employee/"
//       );

//       setUsers(response.data);
//       dispatch(setUser(response.data));
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   return (
//     <>
//       <div className="container mx-auto mt-8 text-center">
//         <h2 className="text-3xl font-semibold mb-4 text-blue-600">User List</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {users.map((user) => (
//             <div
//               key={user.id}
//               className="bg-blue-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
//             >
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold mb-2">
//                   {user.FirstName} {user.LastName}
//                 </h3>
//                 <p className="text-gray-600 mb-2">Date of Birth: {user.DOB}</p>
//                 <p className="text-gray-600 mb-2">Study: {user.Study}</p>
//                 <p className="text-gray-600 mb-2">
//                   Start Date: {user.StartDate}
//                 </p>
//                 <p className="text-gray-600 mb-2">End Date: {user.EndDate}</p>
//                 <p className="text-gray-600 mb-2">
//                   Current Salary: {user.CurrentSalary}
//                 </p>
//                 <p className="text-gray-600 mb-4">
//                   Description: {user.Description}
//                 </p>
//                 <div className="flex justify-between items-center">
//                   <Link
//                     to={`/deleteuser/${user.id}`}
//                     className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none fixed"
//                   >
//                     Delete
//                   </Link>
//                   <Link to={`/updateuser/${user.id}`}>
//                     <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none">
//                       Edit
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../Store/userSlice";
import Footer from "./Footer";

const Home = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://sweede.app/DeliveryBoy/Get-Employee/"
      );

      setUsers(response.data);
      dispatch(setUser(response.data));
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto mt-8 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">User List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-blue-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {user.FirstName} {user.LastName}
                </h3>
                <p className="text-gray-600 mb-2">Date of Birth: {user.DOB}</p>
                <p className="text-gray-600 mb-2">Study: {user.Study}</p>
                <p className="text-gray-600 mb-2">
                  Start Date: {user.StartDate}
                </p>
                <p className="text-gray-600 mb-2">End Date: {user.EndDate}</p>
                <p className="text-gray-600 mb-2">
                  Current Salary: {user.CurrentSalary}
                </p>
                <p className="text-gray-600 mb-4">
                  Description: {user.Description}
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    to={`/deleteuser/${user.id}`}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none"
                  >
                    Delete
                  </Link>
                  <Link to={`/updateuser/${user.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none">
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
