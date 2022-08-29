import { useState, useContext, useEffect } from "react";
import { searchContext } from "../contexts/searchContext";
import { Wrapper } from "../components/styledWrapper";
import Card from "../components/styledCard";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { Overlay } from "../components/styledOverlay";

const Search = () => {
  const { value } = useContext(searchContext);
  const [recipes, setRecipes] = useState([]);

  const searchItems = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=04dcaf0e981c4065a52f430e4642d2b5&query=${value}`
    );

    const data = await api.json();

    console.log(data);
    setRecipes(data.results);
  };

  useEffect(() => {
    searchItems();
  }, [value]);

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

export default Search;
