import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { navbar } from "../utils/navbar";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {navbar.map(({ id, path, element }) => {
            return <Route key={id} path={path} element={element} />;
          })}
        </Route>
        <Route exect path="/" element={<Navigate to={"/home"} />} />
        <Route path="*" element={<h1>Not fount 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
