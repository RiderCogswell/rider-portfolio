import React from "react";
import ProjectList from "../ProjectList";
import { capitalizeFirstLetter } from "../../utils/helpers";

const Portfolio = ({ currentPiece }) => {
  const { title } = currentPiece;

  return(
    <section>
      <h1>{capitalizeFirstLetter(title)}</h1>
      <ProjectList piece={currentPiece.title}/> 
    </section>
  )
}

export default Portfolio;