import React from "react";
import Button from "react-bootstrap/Button";
import { usePizzaContext } from "../context/PizzaContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { dataCart, pizzaQuantities, totalCart, addToCart, removeFromCart } =
    usePizzaContext();

  const navigate = useNavigate();

  const handleAddToCart = (pizza) => {
    addToCart(pizza);
  };

  const handleRemoveFromCart = (pizza) => {
    removeFromCart(pizza);
  };

  const groupPizzasByType = (cart) => {
    const groupedPizzas = {};
    cart.forEach((pizza) => {
      if (groupedPizzas[pizza.id]) {
        groupedPizzas[pizza.id].quantity += 1;
      } else {
        groupedPizzas[pizza.id] = {
          pizza,
          quantity: 1,
        };
      }
    });
    return Object.values(groupedPizzas);
  };

  const handleBtnPago = () => {
    if (dataCart.length > 0) {
      // Realizar aquí cualquier lógica de cancelación que necesites

      // Mostrar un mensaje en la consola
      alert("¡Su pedido fue cancelado exitosamente!");

      // Redirigir al usuario a la vista principal
      navigate("/");
    } else {
      // Si el carrito está vacío, muestra un mensaje de que el carrito está vacío
      alert("El carrito está vacío");
    }
  };

  // Función para formatear el valor a pesos chilenos
  const formatToChileanPesos = (value) => {
    return value.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    });
  };

  const groupedPizzas = groupPizzasByType(dataCart);

  return (
    <div className="const-carrito">
      <p>
        <strong>Detalles del pedido: </strong>
      </p>
      <div className="div1-carrito">
        {groupedPizzas.map((group) => (
          <div key={group.pizza.id} className="div2-carrito">
            <img
              src={group.pizza.img}
              alt=""
              style={{ width: "80px", height: "50px", alignItems: "center" }}
            />
            <p>{group.pizza.name}</p>
            <div className="div3-carrito">
              {formatToChileanPesos(
                group.pizza.price * pizzaQuantities[group.pizza.id]
              )}
              <Button
                className="btnVer"
                variant="danger"
                onClick={() => handleRemoveFromCart(group.pizza)}
              >
                -
              </Button>
              <p>{pizzaQuantities[group.pizza.id] || 0}</p>
              <Button
                className="btnCarro"
                variant="success"
                onClick={() => handleAddToCart(group.pizza)}
              >
                +
              </Button>
            </div>
          </div>
        ))}
        <div className="div4-carrito">
          <h3>Total: {formatToChileanPesos(totalCart)}</h3>
          <Button
            className="btnPago"
            onClick={handleBtnPago}
            variant="primary"
            size="lg"
          >
            Ir a Pagar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
