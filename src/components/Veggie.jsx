import { useEffect } from "react";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Card from "./styledCard";
import { Overlay } from "./styledOverlay";
import { Link } from "react-router-dom";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const getVeggie = async () => {
    const lsVeggie = localStorage.getItem("Veggie");

    if (lsVeggie) {
      setVeggie(JSON.parse(lsVeggie));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=04dcaf0e981c4065a52f430e4642d2b5&number=12&tags=vegetarian`
      );
      const data = await api.json();

      console.log(data.recipes);
      setVeggie(data.recipes);
      localStorage.setItem("Veggie", JSON.stringify(data.recipes));
    }
  };

  useEffect(() => {
    getVeggie();

    window.addEventListener("resize", () => {
      setInnerWidth(+window.innerWidth);
    });
  }, []);

  return (
    <>
      <h3>Veggie picks</h3>
      <Splide
        options={{
          perPage: innerWidth <= 991 ? 1 : 3 | 1,
          drag: "free",
          gap: "2rem",
          pagination: false,
        }}>
        {veggie &&
          veggie.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={`/recipe/${recipe.id}`}>
                  <h4>{recipe.title}</h4>
                </Link>
                <img src={recipe.image} alt="" />
                <Overlay />
              </Card>
            </SplideSlide>
          ))}
      </Splide>
    </>
  );
};

export default Veggie;
