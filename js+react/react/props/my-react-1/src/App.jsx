import "./App.css";
import CartData from "./component/cart/CartData";
import ProduteCard from "./component/ProductCard/ProduteCard";
import ProductPage from "./component/ProductPage/ProductPage";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
function App() {
  return (
    <>
      <CartData></CartData>
      {/* <ProductPage></ProductPage> */}
      <ProduteCard></ProduteCard>
    </>
  );
}

export default App;
