import { usePizzaContext } from "../context/PizzaContext";
import Cards from "./Cards";

export const Home = () => {
  const { dataPizzas } = usePizzaContext();

  return (
    <div className="cont-home">
      <div className="div1-cont-home">
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>¡Tenemos las mejores piazzas que podras encontrar!</p>
      </div>
      <div className="div2-cont-home">
        {dataPizzas.map((dataPizza) => (
          <Cards key={dataPizza.id} dataPizza={dataPizza} />
        ))}
      </div>
    </div>
  );
};
