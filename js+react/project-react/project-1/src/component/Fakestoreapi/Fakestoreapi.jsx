import React, { useState, useEffect } from "react";

export default function Fakestoreapi() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("error");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  if (loading) {
    return <div className="text-center"></div>;
  }
  if (error) {
    return <div className="bg-dark">{error}</div>;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-3">
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top p-2"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h6 className="card-title">{product.title}</h6>
                  <p className="card-text fw-bold text-primary">
                    ${product.price}
                  </p>
                  <span className="badge bg-secondary">{product.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
