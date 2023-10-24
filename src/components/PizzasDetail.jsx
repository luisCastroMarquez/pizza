import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { usePizzaContext } from "../context/PizzaContext";

const PizzaDetail = () => {
  const { id } = useParams();
  const { dataPizzas, addToCart } = usePizzaContext(); // Importa addToCart Desde el contexto
  const [dataPizza, setDataPizza] = useState({});

  useEffect(() => {
    const data = dataPizzas.find((pizza) => pizza.id === id);

    setDataPizza(data);
  }, [dataPizzas, id]);

  // Agrega al carro la pizza
  const handleAddToCartClick = (pizza) => {
    addToCart(pizza);
  };

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Card.Img height="250px" variant="top" src={dataPizza.img} />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card.Text>
          <h2> {dataPizza.name} </h2>
        </Card.Text>
        <Card.Text>
          <strong>{dataPizza.desc}</strong>
        </Card.Text>
        <Card.Text>
          <h5>{dataPizza.ingredients}</h5>
        </Card.Text>
        <Card.Text>
          <h4>{dataPizza.price}</h4>
        </Card.Text>
        <Button
          className="btnCarro"
          onClick={() => handleAddToCartClick(dataPizza)}
        >
          Añadir <FaCartPlus />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PizzaDetail;
