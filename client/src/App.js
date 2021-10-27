import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import { authObserverLoading } from "./redux/auth/action";

import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reactions from "./pages/Reactions";
import Trending from "./pages/Trending";
import Emojis from "./pages/Emojis";
import Stickers from "./pages/Stickers";
import Results from "./pages/Results";
import { getAllItemsData } from "./api";

import Spinner from "./components/Spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [uploadedItems, setUploadedItems] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const { loading, signInSuccess } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(authObserverLoading());
    if (uploadedItems.length === 0) {
      setIsLoading(true);
      getAllItemsData()
        .then((res) => {
          setUploadedItems(res.data.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    }
  }, [dispatch]);

  useEffect(() => {
    if (!loading && signInSuccess) {
      history.push("/");
    }
  }, [loading, signInSuccess]);

  return (
    <div>
      {isLoading ? (
        <Spinner color={"rgb(245, 121, 6)"} loading={true} />
      ) : (
        <Switch>
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
          <Route
            path="/trending"
            exact
            render={(routeProps) => <Trending {...routeProps} />}
          />
          <Route
            path="/reactions"
            exact
            render={(routeProps) => <Reactions {...routeProps} />}
          />
          <Route
            path="/emojis"
            exact
            render={(routeProps) => (
              <Emojis {...routeProps} uploadedItems={uploadedItems} />
            )}
          />
          <Route
            path="/stickers"
            exact
            render={(routeProps) => (
              <Stickers {...routeProps} uploadedItems={uploadedItems} />
            )}
          />
          <Route
            path="/results"
            exact
            render={(routeProps) => (
              <Results {...routeProps} uploadedItems={uploadedItems} />
            )}
          />
          <Route
            path="/"
            exact
            render={(routeProps) => (
              <Home {...routeProps} uploadedItems={uploadedItems} />
            )}
          />
        </Switch>
      )}
      <ToastContainer
        position="top-center"
        toastStyle={{
          backgroundColor: "rgb(246, 248, 248)",
          color: "black",
          fontSize: "12px",
        }}
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
