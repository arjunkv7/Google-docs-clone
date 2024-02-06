import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import NewDocument from "../components/NewDocument";
import RecentDocuments from "../components/RecentDocuments";
import Add from "../assets/create-copy.png";
import { Link, Navigate } from "react-router-dom";

const Dashboard = () => {
  useEffect(() => {
 
  }, []);
  
  let token = window.localStorage.getItem("token");
  let userDetails = window.localStorage.getItem("userData");
  console.log("token", token)
  if (!token) return <Navigate to="/login" />;

  return (
    <>
      <Navbar />
      <NewDocument />

      {/* <RecentDocuments /> */}
      {/* <Link to="/Editer">
                <div className="fixed bottom-2 right-4 rounded-full bg-white w-16 h-16 cursor-pointer">
                    <img src={Add} alt="" className="h-10 ml-[14px] mt-[14px]" />
                </div>
            </Link> */}
    </>
  );
};

export default Dashboard;
