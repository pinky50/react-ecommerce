import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Footer/Copyright";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Wishlist from "./components/Wishlist/Wishlist";
import Cart from "./components/Cart/Cart";
import Account from "./components/Account/Account";
import ProfileInformation from "./components/Account/ProfileInformation";
import ManageAddress from "./components/Account/ManageAddress";
import ChangePassword from "./components/Account/ChangePassword";
import View from "./components/Home/View";
import Checkout from "./components/Checkout/Checkout";
import OrderComplete from "./components/OrderComplete/OrderComplete";
// import Nevi from "./components/Header/Nevi";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Navbar />
      {/*  <Nevi /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/view" element={<View />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route
          path="/profileInformation"
          element={<ProfileInformation />}
        ></Route>
        <Route path="/manageAddress" element={<ManageAddress />}></Route>
        <Route path="/changePassword" element={<ChangePassword />}></Route>
        <Route path="/orderComplete" element={<OrderComplete />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
      <Copyright />
    </Provider>
  );
}

export default App;
