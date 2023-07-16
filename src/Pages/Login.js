import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/Authentication";
import withPublic from "../HOC/withPublic";

function handleStorage(name = "", data) {
  try {
    localStorage.setItem(name, data);
  } catch (e) {
    console.error("ERROR: setting localstorage");
  }
}

function Login() {
  const { setToken } = useAuth();
  const [data, setData] = useState({});
  const navigator = useNavigate();

  function handleInputChange(e) {
    let formCopy = {
      ...data,
    };
    formCopy[e.target.id] = e.target.value;
    setData(formCopy);
  }

  function handleSubmit(e) {
    fetch("http://localhost:5000/api/user/login", {
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Connection: "keep-alive",
      },
      method: "POST",
      redirect: "follow",
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json(response);
      })
      .then((result) => {
        if (result.error) {
          console.log("danger", result.error);
        } else {
          const { token } = result;
          handleStorage("Token", token);
          setToken(token);
          navigator("/dashboard");
        }
      })
      .catch((error) => {
        if (error) {
          console.log("danger", error.message);
        }
      });
  }

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-center">
        <div className="card" width="200px" id="login-card">
          <div className="card-body p-3">
            <div className="mb-3">
              <label for="emailId" className="form-label">
                Email Id
              </label>
              <input
                name="emailId"
                type="email"
                className="form-control"
                id="emailId"
                placeholder="name@example.com"
                value={data["emailId"]}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="password"
                placeholder="***********"
                value={data["password"]}
                onChange={handleInputChange}
              />
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              style={{ width: "100%" }}
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withPublic(Login);
