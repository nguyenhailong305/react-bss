import React from "react";
import "./dashboard.scss";
import Navbar from "../../components/Navbar/Navbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Rightbar from "../../components/Rightbar/Rightbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Leftbar />
      <Rightbar />
    </div>
  );
};

export default Dashboard;
