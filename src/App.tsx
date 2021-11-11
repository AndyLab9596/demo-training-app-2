import React from "react";
import { Route, Switch } from "react-router";
import "./App.scss";
import { PrivateRoute } from "./components/common";
import AdminAntd from "./components/layout/AdminAntd/AdminAntd";
import AdminMui from "./components/layout/AdminMui/AdminMui";
import LoginPage from "./features/auth/pages/LoginPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <PrivateRoute path="/adminSaga">
          <AdminMui />
        </PrivateRoute>
        <PrivateRoute path="/adminThunk">
          <AdminAntd />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
