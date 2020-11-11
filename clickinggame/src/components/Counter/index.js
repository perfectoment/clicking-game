import React from "react";
import "./style.css";

// By extending the React.Component class, Counter inherits functionality from it
function Counter(props){
  return (
        <h4 className="counter">Current Score: {props.score} || High Score: {props.highscore}</h4>
  )}

export default Counter;
