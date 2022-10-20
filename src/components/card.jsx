import React  from "react";

const Card = (props) => {

    return (
        <div>
            <img src={props.imgSrc} alt={props.text} width="150" height="150" onClick={() => props.cardClicked()}/>
            <h3>{props.text}</h3>
        </div>
    );

}

export default Card