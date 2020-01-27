import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import User from "./components/user/User";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/user' component={() => <User user={User} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
