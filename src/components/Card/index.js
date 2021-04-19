import React from "react";
import "./style.css";

function Card(props) {
  return (
      <div>
        <img src={props.image} className="card-img-top" alt={props.title}/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
            <a href={props.github} className="btn btn-primary">github</a>
            <a href={props.website} className="btn btn-primary">website</a>
        </div>
      </div>
  );
}

export default Card;
