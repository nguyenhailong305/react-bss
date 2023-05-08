import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import * as pages from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<pages.Login />} />
      <Route path="/Dashboard" element={<pages.Dashboard />} />
      <Route path="/Logs" element={<pages.Logs />} />
        <Route path="/Settings" element={<pages.Settings />} />
        <Route path="*" element={<Navigate to="/Dashboard" />} />
      {/* <Route path="/tours" element={<Tours />} />
      
     
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tour/search" element={<SearchResultList />} /> */}
    </Routes>
  );
};

export default Routers;
