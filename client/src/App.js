import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Alerts from "./components/layout/Alerts";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import User from "./components/user/User";
import UserState from "./context/user/UserState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <UserState>
        <AlertState>
          <Router>
            <Navbar />
            <div className='container'>
              <Alerts />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route
                  exact
                  path='/user'
                  component={() => <User user={User} />}
                />
              </Switch>
            </div>
          </Router>
        </AlertState>
      </UserState>
    </AuthState>
  );
}

export default App;
