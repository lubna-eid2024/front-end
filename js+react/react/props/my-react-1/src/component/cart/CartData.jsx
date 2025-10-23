import React from "react";

export default function CartData() {
  const MyCart = JSON.parse(localStorage.getItem(`productData`)) || [];
  // console.log(CartData);

  console.log(MyCart, "MyCart");

  return (
    <>
      <h1>my cart</h1>
      {MyCart.length === 0 && <p> no found</p>}

      {MyCart.map((product) => (
        <ProdutCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </>
  );
}
