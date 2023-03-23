import { useState, useEffect } from "react";
import { Wrapper } from "../components/styledWrapper";
import Card from "../components/styledCard";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { Overlay } from "../components/styledOverlay";

const Search = ({ value }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    (async () => {
      try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=04dcaf0e981c4065a52f430e4642d2b5&query=${value}`,
          { signal: signal }
        );

        const data = await api.json();

        setRecipes(data.results);
      } catch (e) {
        if (e.type == "AbortError") return;
        // console.log(e.message);
      }
    })();

    return () => controller.abort();
  }, [value]);

  return (
    <>
      <Wrapper>
        {recipes.map(recipe => (
          <Card key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <h4>{recipe.title}</h4>
            </Link>
            <img src={recipe.image} alt="" />
            <Overlay />
          </Card>
        ))}
      </Wrapper>

      <Link to="/" title="Back home">
        <FaAngleLeft />
      </Link>
    </>
  );
};

export default Search;
