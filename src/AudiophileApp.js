import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
// import Speakers from "./pages/speakers/Speakers";
// import Earphones from "./pages/earphones/Earphones";
import Category from "./pages/category/Category";

import AppStyles from "./AudiophileAppStyles";

function AudiophileApp() {
  const classes = AppStyles();
  return (
    <div>
      <div className={classes.header}>
        <Header />
      </div>
      <Switch>
        <div className={classes.main__content}>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/:category"
            render={(routeprops) => <Category routeprops={routeprops} />}
          />
          {/* <Route
            exact
            path="/:category/:product"
            render={(routeprops) => <Category routeprops={routeprops} />}
          /> */}
          {/* <Route exact path="/speakers" render={() => <Speakers />} />
          <Route exact path="/earphones" render={() => <Earphones />} /> */}
        </div>
      </Switch>

      <Footer />
    </div>
  );
}

export default AudiophileApp;
