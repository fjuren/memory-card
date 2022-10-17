import React  from "react";

const Card = (prop) => {

    return (
        <div>
            <div id="border">
                <div>
                    <img src={prop.imgSrc} alt={prop.text} width="150" height="150" />
                    <h3>{prop.text}</h3>
                </div>
            </div>
        </div>
    );

}

export default Card