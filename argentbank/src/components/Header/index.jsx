import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import imgSrc from "../../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import { home, signIn } from "../../routes/routes";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../feature/userSlice";
import { userPage } from "../../routes/routes";

export const Header = () => {
  const dispatch = useDispatch();
  //recover firstName in the global state
  const firstName = useSelector((state) => state.user.firstName);

  //recover connect state for adapt header style
  const stateConnectUser = useSelector((state) => state.user.connect);

  //function when the user click, we order to redux to call setLogout() action - the user will be disconnected
  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <header>
      <nav
        className={
          stateConnectUser === true
            ? "main-nav main-nav--user-connect"
            : "main-nav"
        }
      >
        <Link className="main-nav-logo" to={home}>
          <img
            className="main-nav-logo-image"
            src={imgSrc}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {stateConnectUser === true && (
          <Link to={userPage} className={"main-nav-username"}>
            <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
            <span>{firstName}</span>
          </Link>
        )}
        {stateConnectUser === true ? (
          <div>
            <Link className="main-nav-item" to={home} onClick={handleLogout}>
              <i className="fa fa-user-circle"></i>
              <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
              Sign out
            </Link>
          </div>
        ) : (
          <div>
            <Link className="main-nav-item" to={signIn}>
              <i className="fa fa-user-circle"></i>
              <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
