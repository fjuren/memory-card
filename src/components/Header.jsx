import React from "react";
import "../assets/styles/header.css"

const Header = (props) => {

    return (
        <div className="score">
            <h2>Test your memory!</h2>
            <p><em>Instructions: try not to choose the same card twice.</em></p>
            <h4>Current score: {props.currentScore}</h4>
            <h4>Best score: {props.bestScore}</h4>
            <i>(Best possible score: 12)</i>
        </div>
    )
}

export default Header