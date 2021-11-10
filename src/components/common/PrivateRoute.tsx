import React from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { KeyWord } from "../../constants";

export interface PrivateProps {}

export const PrivateRoute = (props: RouteProps) => {
  const isLoggedIn = localStorage.getItem(KeyWord.ACCESS_TOKEN);
  if (!isLoggedIn) return <Redirect to="/" />;

  return <Route {...props} />;
};
