import React from "react";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./Pages/HomePage";
import UsersList from "./Pages/UsersList";
import LoginPage from "./Pages/LoginPage";
import { Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
function App() {

  const visiterdata = useSelector((state)=>{
    return state.user.auth[0]
  })
  console.log("visitoe",visiterdata);

  // if(visiterdata===true){
  //   setUser(true)
  //   console.log("djvbjvb",user);
  // }else{
  //   setUser(false)
  // }
 

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        {!visiterdata && (<>
            <Route exact path="/" element={<LoginPage  />} />
            <Route exact path="/register" element={<HomePage />} />
            <Route exact path="*" element={<Navigate to={"/"} />} />
        </>)}
        {visiterdata && (<>
            <Route exact path="/users" element={<UsersList />} />
            <Route exact path="*" element={<Navigate to={"/users"} />} />
        </>)}
        {/* <Route exact path="/" element={<LoginPage  />} />
        <Route exact path="/register" element={<HomePage />} />
        <Route exact path="/users" element={<UsersList />} /> */}
      </Routes>
    </>
  );
}

export default App;


