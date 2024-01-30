// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import CartPage from "./pages/CartPage";
import ProductDetails from "./product-list/ProductDetails";
import ProductList from "./product-list/ProductList";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}>
            <Route index element={<HomePage/>}/>
            <Route path="signup" element={<SignUpPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/cart-page" element={<CartPage/>}/>
            <Route path="/contact-us" element={<ContactUsPage/>}/>
            {/* <Route path="/product-list" element={<ProductList/>}/> */}
            <Route path="/product-details/:id" element={<ProductDetails/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
