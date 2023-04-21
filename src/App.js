import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartState from "./context/CartState";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import Error404 from "./components/Error404/Error404";

function App() {
  return (
    <>
      <div className="app-container">
        <CartState>
          <Cart />
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/shop" element={<ItemListContainer />} />

            <Route
              exact
              path="/shop/category/:category"
              element={<ItemListContainer />}
            />

            <Route
              exact
              path="/item/detail/:id"
              element={<ItemDetailContainer />}
            />

            <Route exact path="/checkout" element={<Checkout />} />

            <Route exact path="*" element={<Error404 />} />
          </Routes>
        </CartState>
      </div>
    </>
  );
}

export default App;
