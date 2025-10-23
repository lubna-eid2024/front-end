import React from "react";

export default function MoviesCard(props) {
  return (
    <>
 
        <div className=" col-md-4 ">
          <img
            src={props.poster}
            className="card-img-top"
            alt={`Poster for ${props.title}`}
            style={{ height: "300px", objectFit: "cover" }}
          />

          <h5 className="card-title">{props.title}</h5>

          <span className="text-muted">Year: {props.year}</span>
          <span className=" bg-primary">Rating: {props.rating}</span>
        </div>
      </>
  
  );
}
