import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import imgSrc from "../../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import { home, signIn } from "../../routes/routes";

export const Header = () => {
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
          <Link className="main-nav-item" to={signIn}>
            <i className="fa fa-user-circle"></i>
            <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};
