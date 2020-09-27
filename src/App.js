import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Review from "./dashboard/Profile";
import "./style.css";
import Login from "./dashboard/Login";
import Verify from "./dashboard/VerifyDocument";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={"/dashboard"} component={Dashboard} />
          <Route exact path={"/:id"} component={Review} />
          <Route exact path={"/"} component={Login} />
          {/* <Route exact path={"/verify/:id"} component={Verify} /> */}

          <Route exact path={"/verify/:id/:url/:name"} component={Verify} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
