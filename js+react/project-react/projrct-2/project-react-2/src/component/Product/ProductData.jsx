import React, { useState } from "react";

export default function ProductData() {
  let ProductsData = [
    {
      id: 2,
      name: "dress",
      description: "cart 1 description",
      price: 10,
      image:
        "https://images.pexels.com/photos/23512402/pexels-photo-23512402/free-photo-of-three-candles-on-a-table-with-books.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      name: "dress",
      description: "cart 1 description",
      price: 10,
      image:
        "https://images.pexels.com/photos/23512402/pexels-photo-23512402/free-photo-of-three-candles-on-a-table-with-books.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      name: "dress",
      description: "cart 1 description",
      price: 10,
      image:
        "https://images.pexels.com/photos/23512402/pexels-photo-23512402/free-photo-of-three-candles-on-a-table-with-books.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count + 1);
  };
  const handleIncrement = () => {
    setCount(count - 1);
  };
  const handleClear = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>

                <th>decrement</th>
                <th>increment</th>
                <th>delete</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {ProductsData.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>${product.price}</td>
                  <td>
                    {count}
                    <button onClick={handleDecrement} className="bg-warning">
                      decrement
                    </button>
                  </td>
                  <td>
                    {" "}
                    {count}
                    <button onClick={handleIncrement} className="bg-success">
                      increment
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={handleClear}
                      className="bg-danger text-light"
                    >
                      delete
                    </button>
                  </td>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
