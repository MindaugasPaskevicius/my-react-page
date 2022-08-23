import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Calculator from "./Component/Calculator/Calculator";
import Todo from "./Component/Todo/Todo";
import Blogposts from "./Component/Blogposts/Blogposts";
import Footer from "./Component/Footer/Footer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/blogposts" element={<Blogposts />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;