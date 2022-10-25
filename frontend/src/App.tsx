import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DoctorShow from "./components/DoctorShow";
import DoctorCreate from "./components/DoctorCreate";
import Login from "./components/Login";
import Main from "./components/Main";

export default function App() {

  const [token, setToken] = useState<String>("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  // if u not have token go to login page
  if (!token) {
    return <Login />;
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/DoctorShow" element={<DoctorShow />} />
        <Route path="/Doctorcreate" element={<DoctorCreate />} />
      </Routes>
    </div >

  );

}