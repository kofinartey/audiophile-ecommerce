import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import ProductDetails from "./pages/product_details/ProductDetails";
import Checkout from "./pages/checkout/Checkout";
import AppStyles from "./AudiophileAppStyles";

function AudiophileApp() {
  const classes = AppStyles();
  return (
    <div>
      <div className={classes.header}>
        <Header />
      </div>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/:category"
          render={(routeprops) => <Category routeprops={routeprops} />}
        />
        <Route
          exact
          path="/:category/:product"
          render={(routeprops) => <ProductDetails routeprops={routeprops} />}
        />

        <Route
          exact
          path="/products/cart/checkout"
          render={() => <Checkout />}
        />
      </Switch>

      <Footer />
    </div>
  );
}

export default AudiophileApp;
