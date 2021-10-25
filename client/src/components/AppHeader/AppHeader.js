import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/action";
import { getUserProfile } from "../../api";
import { NavLink, Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./AppHeader.scss";

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
      history.push("/");
      getUserData();
    }
  }, [user, loading, authObserverSuccess, history]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="mb-4" {...props}>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand navbar-dark justify-content-between">
            <NavLink exact className="navbar-brand home" to="/">
              Home
            </NavLink>

            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/upload">
                  Upload
                </NavLink>
              </li>
            </ul>
            {authObserverSuccess && userInfo ? (
              <>
                <Link exact className="user-name" to="/">
                  {userInfo.firstName} {userInfo.lastName}
                </Link>
                <Link exact className="nav-link" to="/">
                  <Button onClick={() => handleLogout()}>Logout</Button>
                </Link>
              </>
            ) : (
              <Link exact className="nav-link" to="/login">
                <Button>Login</Button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
