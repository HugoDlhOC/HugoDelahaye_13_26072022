import { Link } from "react-router-dom";
import imgSrc from "../../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../feature/userSlice";
import { home } from "../../routes/routes";

export const HeaderUser = () => {
  const dispatch = useDispatch();
  //recover firstName in the global state
  const firstName = useSelector((state) => state.user.firstName);

  //function when the user click, we order to redux to call setLogout() action - the user will be disconnected
  const handleLogout = () => {
    dispatch(setLogout());
  };
  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to={home}>
          <img
            className="main-nav-logo-image"
            src={imgSrc}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
          <span>{firstName}</span>
        </div>
        <div>
          <Link className="main-nav-item" to={home} onClick={handleLogout}>
            <i className="fa fa-user-circle"></i>
            <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
            Sign out
          </Link>
        </div>
      </nav>
    </header>
  );
};
