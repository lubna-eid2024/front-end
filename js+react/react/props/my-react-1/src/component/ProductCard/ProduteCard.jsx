import React from "react";

export default function ProduteCard(props) {
  function add() {
    const productDelails = {
      price: props.price,
      description: props.description,
    };
    // localStorage.setItem("productData", JSON.stringify(updataData));
    const existeData = JSON.parse(localStorage.getItem("productData")) || [];
    const updataData = [...existeData, productDelails];
    localStorage.setItem("productData", JSON.stringify(updataData));
  }
  return (
    <>
      <div className="card col-md-2 p-2 m-2 text-center">
        <h4>{props.name}</h4>
        <p className="text-success">{props.price}</p>
        <p className="text-danger">{props.description}</p>
        <button
          className="w-50 m-auto text-light rounded-pill bg-success"
          onClick={add}
        >
          add to cart
        </button>
        {/* <button
          className="w-50 m-auto text-light rounded-pill bg-success"
          onClick={() => {
            console.log("click");
          }}
        >
          add to cart
        </button> */}
      </div>
    </>
  );
}
