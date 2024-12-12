import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import SignIn from "../pages/sigin/SignIn/SignIn";
import SignUp from "../pages/sigin/SignUp/SignUp";
import Bookings from "../pages/Bookings/Bookings";
import Trip from "../pages/trip/TripPage";

const AppRoutes = ({ setUser }) => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
    <Route path="/sign-up" element={<SignUp setUser={setUser} />} />
    <Route path="/bookings" element={<Bookings />} />
    <Route path="/trip/:tripId" element={<Trip />} />
  </Routes>
);

export default AppRoutes;
