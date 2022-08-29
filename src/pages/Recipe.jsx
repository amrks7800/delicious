import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../CSS/recipe.css";

const Recipe = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const getDetails = async (id) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=04dcaf0e981c4065a52f430e4642d2b5`
    );

    const data = await api.json();

    setDetails(data);
    console.log(data);
  };

  useEffect(() => {
    getDetails(id);
  }, [id]);

  return (
    <>
      <div className="container__detail">
        <div className="right">
          <h3 className="title__detail">{details.title}</h3>
          <small>{details.dishTypes}</small>
          <small>{details.cuisines}</small>
          <img src={details.image} alt={details.title} className="detailImg" />
        </div>
        <p
          className="left"
          dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
        <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
      </div>
    </>
  );
};

export default Recipe;
