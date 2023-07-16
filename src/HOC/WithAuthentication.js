import React from "react";
import { useAuth } from "../Contexts/Authentication";
import { useNavigate } from "react-router-dom";

export default function withAuthentication(Component) {
  return function WithProtected(props) {
    const { token } = useAuth();
    console.log("HOC", token);
    const router = useNavigate();
    const isLoggedIn = token ? true : false;
    if (isLoggedIn) {
      return <Component />;
    }
    return router(`/`);
  };
}
