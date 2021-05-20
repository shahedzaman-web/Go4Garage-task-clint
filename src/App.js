import "./App.css";
import background from "./assets/Bg.png";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import LoginHome from "./Components/Login/LoginHome";

import ProductList from "./Components/ProductList/ProductList";
import AddProduct from "./Components/AddProduct/AddProduct";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserLogin from "./Components/Login/UserLogin";
import VendorLogin from "./Components/Login/VendorLogin";

function App() {
  return (
    <Router>
      <div
        className="img-fluid pb-2"
        style={{ backgroundImage: `url(${background})`, height: "100vh" }}
      >
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/user/login">
            <UserLogin></UserLogin>
          </Route>
          <Route path="/vendor/login">
            <VendorLogin></VendorLogin>
          </Route>
          <Route path="/loginHome">
            <LoginHome></LoginHome>
          </Route>
          <Route path="/vendor/addProduct">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/user/productList">
            <ProductList></ProductList>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
