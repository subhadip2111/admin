import CreateUser from './components/Createuser';
import DeleteUser from './components/DeleteUser';
import Header from './components/Header';
import Home from './components/Home';
import Update from './components/Update';




import {
  createBrowserRouter,
 
 
  Outlet,
} from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Outlet />

      {/* <Navbar /> */}
      <Home />
    </>
  );
}




 export  const router = createBrowserRouter([
   {
     path: "/",
     element: <App />,

   },


   {
     path: "/createUser",
     element: <CreateUser />,
   },
   {
     path: "/updateuser/:id",
     element: <Update />,
   },

   {
     path: "/deleteuser/:id",
     element: <DeleteUser />,
   },
  
 ]);

export default App;

