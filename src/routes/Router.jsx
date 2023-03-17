import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostPage from "../pages/CommentPage/PostPage";
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
        <Route path="/postpage" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
