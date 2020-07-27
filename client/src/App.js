import React from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginSignupForm from "./components/auth/LoginSignupForm";
import Home from "./components/home/Home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={LoginSignupForm} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
