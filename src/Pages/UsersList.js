import React from "react";
// import Header from "../Components/Header";
// import { useState, useEffect } from "react";
import { FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userlogout } from "../Action";

const UersList = () => {
  const dispatch = useDispatch()
  const data = useSelector((state)=>{
    return state.user.items

  })

  // console.log(data);
  // function logout () {
  //   Navigate("/")
  //   dispatch(userlogout(false))
  // }
  // localStorage.setItem("users", JSON.stringify(data))

  return (
    <div>
      {/* <Header /> */}
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand">
            {" "}
            <FaHouseUser /> User Management System{" "}
          </span>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           
            <li className="nav-item">
              <Link className="nav-link " to="/users">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/" onClick={()=> {dispatch(userlogout())}}>
                Logout{" "}
              </Link>
            </li>            
          </ul>
        </div>
      </nav>
    </div>
      <div className="container content">
        <div className="border mt-4 p-4">
          <h3 className="text-center bg-info p-2 mb-3">
            Welcome To User Management System
          </h3>
          
            {data.map((userData) => (
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="ms-4">
                <h5 >
                  Name   : {userData.name}
                </h5>
                <h5>
                  Email  :  {userData.email}                
                </h5>
                <hr/>
              </div>
            </div>
          </div>
          ))} 
        </div>
      </div>
    </div>
  );
};

export default UersList;













