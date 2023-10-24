import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import PizzaDetail from "./components/PizzasDetail";
import Cart from "./components/Cart";
import { PizzaProvider } from "./context/PizzaContext";

const App = () => {
  return (
    <>
      <PizzaProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/pizza/:id" element={<PizzaDetail />} />
            <Route path="/carrito" element={<Cart />} />

            <Route path="*" element={<Navigate replace to="/home/" />} />
          </Routes>
        </BrowserRouter>
      </PizzaProvider>
    </>
  );
};

export default App;
