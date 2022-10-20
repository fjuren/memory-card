import React from "react";

const Header = (props) => {

    return (
        <div>
            <h4>Current score: {props.currentScore}</h4>
            <h4>Best score: {props.bestScore}</h4>
        </div>
    )
}

export default Header