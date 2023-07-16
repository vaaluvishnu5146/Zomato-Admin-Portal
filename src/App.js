import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Restaurants from "./Pages/Products";
import Signup from "./Pages/Signup";
import { useAuth } from "./Contexts/Authentication";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/createaccount" Component={Signup} />
        <Route path="/dashboard" Component={Home} />
        <Route path="/restaurants" Component={Restaurants} />
      </Routes>
    </div>
  );
}

export default App;
