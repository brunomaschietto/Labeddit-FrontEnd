import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommentPage from "../pages/CommentPage/CommentPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/commentPage" element={<CommentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
