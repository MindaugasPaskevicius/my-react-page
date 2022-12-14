import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Calculator from "./Component/Calculator/Calculator";
import Todo from "./Component/Todo/Todo";
import About from "./Component/About/About";
import Footer from "./Component/Footer/Footer";
import { HashRouter,Navigate, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};
export default App;