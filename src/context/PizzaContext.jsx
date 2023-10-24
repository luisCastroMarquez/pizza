import { createContext, useContext, useState } from "react";
import pizzas from "../assets/data/pizzas.json";

const PizzaContext = createContext();

export const usePizzaContext = () => {
  return useContext(PizzaContext);
};

export const PizzaProvider = ({ children }) => {
  const [dataPizzas, setDataPizzas] = useState(pizzas);
  const [dataCart, setDataCart] = useState([]);
  const [pizzaQuantities, setPizzaQuantities] = useState({});
  const [totalCart, setTotalCart] = useState(0);

  const addToCart = (pizza) => {
    setDataCart((prevCart) => [...prevCart, pizza]);
    setTotalCart((prevTotal) => prevTotal + pizza.price);
    setPizzaQuantities((prevQuantities) => ({
      ...prevQuantities,
      [pizza.id]: (prevQuantities[pizza.id] || 0) + 1,
    }));
  };

  const removeFromCart = (pizza) => {
    // Si la cantidad de esta pizza es mayor que uno, simplemente disminuimos la cantidad
    if (pizzaQuantities[pizza.id] > 1) {
      setPizzaQuantities((prevQuantities) => ({
        ...prevQuantities,
        [pizza.id]: prevQuantities[pizza.id] - 1,
      }));
      setTotalCart((prevTotal) => prevTotal - pizza.price);
    } else {
      // Si la cantidad es 1 o menos, eliminamos la pizza completa
      setDataCart((prevCart) =>
        prevCart.filter((item) => item.id !== pizza.id)
      );
      setTotalCart((prevTotal) => prevTotal - pizza.price);
      setPizzaQuantities((prevQuantities) => {
        const updatedQuantities = { ...prevQuantities };
        delete updatedQuantities[pizza.id];
        return updatedQuantities;
      });
    }
  };

  return (
    <PizzaContext.Provider
      value={{
        dataPizzas,
        dataCart,
        pizzaQuantities,
        totalCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaContext;
