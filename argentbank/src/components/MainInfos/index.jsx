import { useState } from "react";
import { changeUsername } from "../../feature/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setChangeNameUser } from "../../feature/userSlice";
import PropTypes from "prop-types";

export const MainInfos = ({ firstName, lastName }) => {
  //recover token
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  //manage style edit button with class
  const [open, setOpen] = useState(false);

  //this method will be display form for change username when user click in edit button
  const handleOpenFormUser = () => {
    setOpen(true);
  };

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  //recover firstname when user write in input
  const onChangeFirstname = (e) => {
    setFirstname(e.target.value);
  };

  //recover lastname when user write in input
  const onChangeLastname = (e) => {
    setLastname(e.target.value);
  };

  //method form - changeUserName() will be called with token, firstname, lastname parameters - order to redux to call setChangeNameUser() action for update state
  const handleForm = (e) => {
    e.preventDefault();
    changeUsername(token, firstname, lastname)
      .then((data) => {
        dispatch(
          setChangeNameUser({
            firstName: data.body.firstName,
            lastName: data.body.lastName,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //cancel the form, hide form part
  const handleCloseForm = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName + " "}
          {lastName}!
        </h1>
        <button
          className={
            open === false
              ? "edit-button display-initial"
              : "edit-button display-none"
          }
          onClick={handleOpenFormUser}
        >
          Edit Name
        </button>
        <div
          className={
            open === false
              ? "form-change-name display-none"
              : "form-change-name display-block"
          }
        >
          <form onSubmit={handleForm}>
            <div className={"form-change-name--inputs"}>
              <input placeholder={"Tony"} onChange={onChangeFirstname} />
              <input placeholder={"Jarvis"} onChange={onChangeLastname} />
            </div>
            <div className={"form-change-name--buttons"}>
              <button
                id={"form-change-name--buttons--save"}
                type="submit"
                onClick={handleCloseForm}
              >
                Save
              </button>
              {/*"reset" for reset content of inputs*/}
              <button
                id={"form-change-name--buttons--cancel"}
                type={"reset"}
                onClick={handleCloseForm}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <h2 className="sr-only">Accounts</h2>
    </div>
  );
};

MainInfos.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};
