import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { authObserverLoading } from "./redux/auth/action";

import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authObserverLoading());
  }, [dispatch]);

  return (
    <div>
      {" "}
      <Route path="/" exact render={(routeProps) => <Home {...routeProps} />} />
      <Route
        path="/upload"
        exact
        render={(routeProps) => <Upload {...routeProps} />}
      />
      <Route
        path="/login"
        exact
        render={(routeProps) => <Login {...routeProps} />}
      />
      <Route
        path="/register"
        exact
        render={(routeProps) => <Register {...routeProps} />}
      />
    </div>
  );
};

export default App;
