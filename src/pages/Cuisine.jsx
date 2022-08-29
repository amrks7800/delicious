import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../components/styledCard";
import { Wrapper } from "../components/styledWrapper";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { Overlay } from "../components/styledOverlay";

const Cuisine = () => {
  const { type } = useParams();

  const [recipes, setRecipes] = useState([]);

  const getCuisine = async (cuisine) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=04dcaf0e981c4065a52f430e4642d2b5&cuisine=${cuisine}`
    );

    const data = await api.json();

    console.log(data);
    setRecipes(data.results);
  };

  useEffect(() => {
    getCuisine(type);
  }, [type]);

  return (
    <>
      <Wrapper>
        {recipes.map((recipe) => (
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

export default Cuisine;
