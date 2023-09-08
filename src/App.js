import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import CheckOut from "./CheckOut";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">首頁</Link>
      <Link to="/checkout">購物車</Link>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/CheckOut" element={<CheckOut />} />

        <Route path="/ProductDetail" element={<ProductDetail />}>
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element="NOT FOUND"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
