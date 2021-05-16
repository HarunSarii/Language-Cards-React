import React, { useState } from "react";
import dummyImg from "../assets/cpp.png";

export default function LangCard({ logo, name, desc, date, author }) {
  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    setFlip(!flip);
  };

  return (
    <div className="LangCard" onClick={handleClick}>
      {!flip ? (
        <>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="name">
            <h3>{name}</h3>
          </div>
        </>
      ) : (
        <div className="back">
          <ul>
            <li>{desc}</li>
            <li>{date}</li>
            <li>{author}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
