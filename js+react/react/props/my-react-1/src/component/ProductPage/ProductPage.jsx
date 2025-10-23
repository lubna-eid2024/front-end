import React from "react";
import ProduteCard from "../ProductCard/ProduteCard";

export default function ProductPage() {
  const products = [
    {
      id: 1,
      name: "iPhone 14",
      price: 999,
      description: "Latest Apple smartphone with A15 chip.",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      price: 899,
      description: "Flagship Android phone from Samsung.",
    },
    {
      id: 3,
      name: "MacBook Pro",
      price: 1999,
      description: "Powerful laptop with M2 chip.",
    },
    {
      id: 4,
      name: "iPad Air",
      price: 599,
      description: "Lightweight tablet with powerful performance.",
    },
    {
      id: 5,
      name: "Apple Watch Series 8",
      price: 399,
      description: "Smartwatch with health tracking.",
    },
    {
      id: 6,
      name: "Sony WH-1000XM5",
      price: 349,
      description: "Noise cancelling wireless headphones.",
    },
    {
      id: 7,
      name: "Dell XPS 13",
      price: 1099,
      description: "Compact and powerful Windows laptop.",
    },
    {
      id: 8,
      name: "Google Pixel 7",
      price: 799,
      description: "Pure Android experience with great camera.",
    },
    {
      id: 9,
      name: "PlayStation 5",
      price: 499,
      description: "Next-gen gaming console by Sony.",
    },
    {
      id: 10,
      name: "Xbox Series X",
      price: 499,
      description: "Powerful gaming console by Microsoft.",
    },
    {
      id: 11,
      name: "Logitech MX Master 3",
      price: 99,
      description: "Advanced wireless mouse for productivity.",
    },
    {
      id: 12,
      name: "Kindle Paperwhite",
      price: 129,
      description: "E-reader with high-resolution display.",
    },
    {
      id: 13,
      name: "GoPro HERO11",
      price: 399,
      description: "Action camera for adventures and sports.",
    },
    {
      id: 14,
      name: "Canon EOS R10",
      price: 979,
      description: "Mirrorless camera for creators.",
    },
    {
      id: 15,
      name: "JBL Flip 6",
      price: 119,
      description: "Portable Bluetooth speaker with deep bass.",
    },
    {
      id: 16,
      name: "Anker PowerCore 20000",
      price: 59,
      description: "High-capacity power bank for devices.",
    },
  ];

  return (
    <>
      <h1 className="text-blod text-capitalize text-center">
        welcome to product page
      </h1>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <ProduteCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
