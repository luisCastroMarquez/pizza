import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus, FaPizzaSlice } from "react-icons/fa";
import { usePizzaContext } from "../context/PizzaContext";

import { Nav, Navbar, Container } from "react-bootstrap";

const NavbarFlow = () => {
  const { totalCart } = usePizzaContext();

  // Función para formatear el valor a pesos chilenos
  const formatToChileanPesos = (value) => {
    return value.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    });
  };

  return (
    <>
      <Navbar className="navBg" bg="light" expand="lg">
        <Container>
          <div className="cont-1">
            <Nav.Link as={Link} to="/home">
              <FaPizzaSlice />
              Pizza Mamma
            </Nav.Link>
          </div>
          <div className="cont-1">
            <Nav.Link as={Link} to="/carrito">
              <FaCartPlus /> {formatToChileanPesos(totalCart)}.-
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarFlow;
