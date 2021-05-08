import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import NotFound from "../src/containers/not_found";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import Dashboard from "../src/containers/dashboard";
import HomeScreen from "./screens/HomeScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import OrderScreen from "./screens/OrderScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
import Signup from "./screens/Signup";
import NavbarScreen from "./screens/NavbarScreen";
import FooterScreen from "./screens/FooterScreen";
import BannerScreen from "./screens/BannerScreen";

function App() {
  return (
    <Router>
      <NavbarScreen />
      <BannerScreen />

      <Container>
        <Switch>
          <Route exact path={"/"}>
            <HomeScreen />
          </Route>
          <Route exact path={"/product_detail/:id"}>
            <ProductDetailScreen />
          </Route>
          <PrivateRoute exact path={"/cart"} component={CartScreen} />

          <PublicRoute
            restricted={true}
            component={LoginScreen}
            path="/login"
            exact
          />
          <PublicRoute
            restricted={true}
            component={Signup}
            path="/signup"
            exact
          />
          <PrivateRoute exact path={"/dashboard"} component={Dashboard} />
          <PrivateRoute exact path={"/order"} component={OrderScreen} />
          <PrivateRoute exact path={"/user"} component={UserProfileScreen} />
          <Route exact path={"/404"}>
            <NotFound />
          </Route>
          <Route exact path={"*"}>
            <Redirect to={"/404"}></Redirect>
          </Route>
        </Switch>
        <FooterScreen />
      </Container>
    </Router>
  );
}

export default App;
