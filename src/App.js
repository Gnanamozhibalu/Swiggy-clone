import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Carouselhome from "./components/Carouselhome";
import Membershipmenu from "./components/Membershipmenu";
import Category from "./components/Category";
import Restaurantcarousel from "./components/Restaurantcarousel";
import RestaurantMenu from "./components/RestaurantMenu";
import Allrestaurants from "./components/Allrestaurants";

import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      
      <Switch>
        {/* {<Redirect exact from="/" to="/restaurants" />} */}
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/restaurants" exact>
        <Navbar />
          <Carouselhome />
          <Membershipmenu />
          <Category />
          <Allrestaurants />
        </Route>
        <Route path="/restaurants/:rname">
        <Navbar />
          <Restaurantcarousel />
          <RestaurantMenu />
        </Route>
      </Switch>
    </>
  );
}

export default App;
