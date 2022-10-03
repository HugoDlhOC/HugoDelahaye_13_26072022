import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { loginUser } from "../../services/communicationApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../feature/userSlice";
import { userPage } from "../../routes/routes";

/**
 * component Form represent the connexion form
 * @returns {JSX.Element}
 */
export const Form = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //submit function for form - call loginUser() method with password and user recover in inputs - order redux to call action setLogin, pass token recover to response of request, and navigate to /user page
  const handleForm = (e) => {
    e.preventDefault();
    loginUser(user, password).then((data) => {
      dispatch(setLogin({ connect: true, token: data.body.token }));
      navigate(userPage);
    });
  };

  //we can't make this : value={password} in an input in form
  //function use for recover user information type by user in input
  const onChangeUser = (e) => {
    setUser(e.target.value);
  };

  //function use for recover password information type by user in input
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
        <h1>Sign In</h1>
        <form onSubmit={handleForm}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={onChangeUser} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={onChangePassword} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};
