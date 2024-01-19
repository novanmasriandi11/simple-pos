import { useEffect, useState } from "react";
import ProductList from "./components/Pages/products/ProductList";
import CartList from "./components/Pages/Carts/CartList";
import Navbar from "./components/Elements/Navbar/Navbar";

function App() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [detail, setDetail] = useState([{ totalPrice: 0, totalProduct: 0 }]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then(async (res) =>
      setProducts(await res.json())
    );
  }, []);

  useEffect(() => {
    let totalPrice = carts.reduce((total, item) => total + item.subTotal, 0);
    let totalProduct = carts.reduce((total, item) => total + item.qty, 0);
    setDetail((values) => ({ ...values, totalPrice, totalProduct }));
  }, [carts]);

  const AddToCart = (value) => {
    if (carts.some((item) => item.id === value.id)) {
      setCarts((values) => {
        let currentValues = [...values];
        let index = currentValues.findIndex((item) => item.id === value.id);
        value.qty += 1;
        value.subTotal = value.qty * value.price;
        currentValues[index] = value;
        return currentValues;
      });
    } else {
      value.qty = 1;
      value.subTotal = value.qty * value.price;
      setCarts((values) => [...values, value]);
    }
  };

  const removeItem = (value) => {
    let newCarts = carts.filter((item) => item.id !== value.id);
    setCarts(newCarts);
  };

  return (
    <>
      <Navbar titleNav={" Simple Point of Sales"} />
      <div className="container-fluid">
        <div className="flex flex-column">
          <div className="w-auto">
            <h5 className="text-gray font-semibold text-center text-lg w-full mt-20">
              Product
            </h5>
            <ProductList products={products} AddToCart={AddToCart} />
          </div>
          <div className="w-auto">
            <h5 className="text-gray font-semibold text-center text-lg w-full mt-20">
              Carts
            </h5>
            <CartList
              products={carts}
              detail={detail}
              removeItem={removeItem}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
