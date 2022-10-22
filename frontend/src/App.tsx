import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DoctorShow from "./components/DoctorShow";
import DoctorCreate from "./components/DoctorCreate";
import Login from "./components/Login";

export default function App() {

  const [token, setToken] = useState<String>("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  if (!token) {
    return <Login />;
  }

  return (
    <div>
    <Navbar />

    <Routes>
      <Route path="/" element={<DoctorShow />} />
      <Route path="/Doctorcreate" element={<DoctorCreate />} />

    </Routes>
    </div>

  );

}