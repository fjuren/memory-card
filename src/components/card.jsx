import React  from "react";
import "../assets/styles/card.css"

const Card = (props) => {

    return (
        <div className="card" onClick={() => props.cardClicked(props.text)}>
            <img src={props.imgSrc} alt={props.text} width="150" height="150"/>
            <h3>{props.text}</h3>
        </div>
    );

}

export default Card