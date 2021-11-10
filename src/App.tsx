import React from "react";
import { Route, Switch } from "react-router";
import "./App.scss";
import { PrivateRoute } from "./components/common";
import Admin from "./components/layout/Admin";
import LoginPage from "./features/auth/pages/LoginPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <PrivateRoute path="/adminSaga">
          <Admin />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
