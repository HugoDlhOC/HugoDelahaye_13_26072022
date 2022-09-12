import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import imgSrc from "../../assets/argentBankLogo.png";
import {Link} from "react-router-dom";

export const Header = () => {
    return <header>
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={imgSrc}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to="/sign-in">
                    <i className="fa fa-user-circle"></i>
                    <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
                    Sign In
                </Link>
            </div>
        </nav>
    </header>
}