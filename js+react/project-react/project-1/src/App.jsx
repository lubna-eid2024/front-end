import "./App.css";
import Navbar from "./component/Navbar/Navbar";

import APIProduct from "./component/APIComponent/APIProduct";
import ProductData from "./component/Product/ProductData";

function App() {
  return (
    <>
      <Navbar />
     <ProductData></ProductData>
    </>
  );
}

export default App;
