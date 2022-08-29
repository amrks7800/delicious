import { useEffect } from "react";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Card from "./styledCard";
import { Overlay } from "./styledOverlay";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const getPopular = async () => {
    const lsPopular = localStorage.getItem("popular");

    if (lsPopular) {
      setPopular(JSON.parse(lsPopular));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=04dcaf0e981c4065a52f430e4642d2b5&number=9`
      );
      const data = await api.json();

      console.log(data.recipes);
      setPopular(data.recipes);
      localStorage.setItem("popular", JSON.stringify(data.recipes));
    }
  };

  useEffect(() => {
    getPopular();

    window.addEventListener("resize", () => {
      setInnerWidth(+window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setInnerWidth(+window.innerWidth);
      });
    };
  }, []);

  return (
    <>
      <h3>Popular picks</h3>
      <Splide
        options={{
          perPage: innerWidth <= 991 ? 1 : 3 | 1,
          drag: "free",
          gap: "2rem",
          pagination: false,
        }}>
        {popular &&
          popular.map((recipe) => (
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

export default Popular;
