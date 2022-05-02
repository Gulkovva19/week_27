import "../assets/styles/Cat.scss";
import React, { useState } from "react";

function Card(props) {
  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    setPressed(!pressed);
  }

  return (
    <div onClick={handleChange} className={pressed ? "selected" : "card"}>
      <div className={props.firstColor}>Безлимитный {props.price}</div>
      <div className={props.secondColor}>
        руб<span className="card-price">{props.price}</span>/мес
      </div>
      <div className="card-speed">до {props.speed} Мбит/сек</div>
      <div className="card-description">{props.description}</div>
    </div>
  );
}

export default Card;
