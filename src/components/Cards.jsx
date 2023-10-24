import { Card, Button } from "react-bootstrap";
import { FaCartPlus, FaEye, FaPizzaSlice } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { usePizzaContext } from "../context/PizzaContext";

const CardPizza = ({ dataPizza }) => {
  const navigate = useNavigate();
  const { addToCart } = usePizzaContext();

  const redirectToDetail = () => navigate("/pizza/" + dataPizza.id);
  const handleAddToCartClick = (pizza) => {
    addToCart(pizza);
  };

  // Función para formatear el valor a pesos chilenos
  const formatToChileanPesos = (value) => {
    return value.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    });
  };

  return (
    <Card className="cardBg" expand="lg">
      <Card.Img className="cardImg" variant="top" src={dataPizza.img} />
      <Card.Body>
        <Card.Title>
          <strong>{dataPizza.name}</strong>
        </Card.Title>
        <Card.Text>
          <strong>Ingredientes:</strong>
        </Card.Text>
        <Card.Text>
          {dataPizza.ingredients.map((ingredient, index) => (
            <div key={index}>
              <span>
                <FaPizzaSlice />
              </span>{" "}
              {ingredient}
            </div>
          ))}
        </Card.Text>
        <Card.Body>
          <Card.Text>{formatToChileanPesos(dataPizza.price)}</Card.Text>
          <Button className="btnVer" onClick={redirectToDetail}>
            Ver Más <FaEye />
          </Button>
          <Button
            className="btnCarro"
            onClick={() => handleAddToCartClick(dataPizza)}
          >
            Añadir <FaCartPlus />
          </Button>
        </Card.Body>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
