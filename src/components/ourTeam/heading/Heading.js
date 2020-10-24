import React from "react";
import "./Heading.css"

export default function Heading() {
  return (
    <div>
      <div className="head">
        <h1>our team</h1>
        <a href="https://github.com/JannaIbrahim/MSP-Website" target="_blank">
          <button>Go to Github</button>
        </a>
      </div>
      <hr className="line"></hr>

    </div>
  );
}