import React, { useEffect } from "react";
import withAuthentication from "../HOC/WithAuthentication";
import { useAuth } from "../Contexts/Authentication";

function Home() {
  const { token } = useAuth();
  useEffect(() => {
    fetch("http://localhost:5000/api/mentors", {
      headers: {
        Token: token,
      },
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }, []);

  return <div>Home</div>;
}

export default withAuthentication(Home);
