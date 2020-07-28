import React from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginSignupForm from "./components/auth/LoginSignupForm";
import Home from "./components/home/Home";

// bootstrap
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={LoginSignupForm} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
