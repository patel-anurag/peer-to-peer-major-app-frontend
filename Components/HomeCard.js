import React from "react";
import Card from "./Card";
import data from "../data.json";
console.log({data});
function HomeCard() {
  return (
    <div className="home-card-grid-parent">
      {data.map((card,index) => (
        <Card card={card} key={index} />
      ))}
    </div>
  );
}

export default HomeCard;
