import React from "react";
import LangCard from "./LangCard";
import { categories } from "../helper/data";

export default function ContainerCard() {
  return (
    <div className="container-card">
      <h2>Languages</h2>
      {categories.map((item) => (
        <LangCard
          logo={item.img}
          name={item.name}
          desc={item.options[0]}
          date={item.options[1]}
          author={item.options[2]}
        />
      ))}
    </div>
  );
}
