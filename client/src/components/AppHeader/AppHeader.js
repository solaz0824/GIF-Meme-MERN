import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/action";
import { getUserProfile } from "../../api";
import { NavLink, Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import HomeIcon from "../../assets/icons/home-icon.png";

import "./AppHeader.scss";
//TODO category page and navlink
const AppHeader = ({ ...props }) => {
  const { loading, authObserverSuccess, user } = useSelector(
    (state) => state.auth
  );
  const [userInfo, setUserInfo] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const getUserData = async () => {
    const userData = await getUserProfile(user.uid);
    setUserInfo(userData.data.data);
  };
  useEffect(() => {
    if (!loading && authObserverSuccess) {
      getUserData();
    }
  }, [user, loading, authObserverSuccess, history]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header {...props} className="AppHeader">
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar first navbar-expand navbar-dark justify-content-between">
            <div className="div-header first-header">
              <NavLink exact className="navbar-brand home col" to="/">
                <img src={HomeIcon} alt="home-icon" className="home-icon" />
              </NavLink>
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Search"
                  // onChange={(e) => handleSearch(e)}
                  // onMouseEnter={(e) => handleSearch(e)}
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Go
                </Button>
              </InputGroup>
            </div>
            <div className="div-header second-header">
              {authObserverSuccess && userInfo ? (
                <>
                  <Link
                    exact
                    className="user-name align-self-center p-1"
                    to="/"
                  >
                    {userInfo.firstName} {userInfo.lastName}
                  </Link>
                  <Link exact className="nav-link p-1" to="/upload">
                    <Button variant="warning">Upload</Button>
                  </Link>
                  <Link exact className="nav-link p-1" to="/">
                    <Button onClick={() => handleLogout()}>Logout</Button>
                  </Link>
                </>
              ) : (
                <Link exact className="nav-link" to="/login">
                  <Button>Login</Button>
                </Link>
              )}
            </div>
          </nav>
        </div>
        <div className="row">
          <nav className="navbar navbar-expand navbar-dark justify-content-around">
            <NavLink exact className="nav-link navbar-dark" to="/trending">
              Trending
            </NavLink>
            <NavLink exact className="nav-link" to="/reactions">
              Reactions
            </NavLink>
            <NavLink exact className="nav-link" to="/emojis">
              Emojis
            </NavLink>
            <NavLink exact className="nav-link" to="/stickers">
              Stickers
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
