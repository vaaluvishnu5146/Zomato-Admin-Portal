import React from "react";
import { useAuth } from "../Contexts/Authentication";
import { useNavigate } from "react-router-dom";

export default function withPublic(Component) {
  return function WithPublic(props) {
    const { token } = useAuth();
    const Prop = {
      ...props,
      token,
    };
    const router = useNavigate();
    const isLoggedIn = token ? true : false;
    if (isLoggedIn) {
      return router(`/dashboard`);
    }
    return <Component {...Prop} />;
  };
}
