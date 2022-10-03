import { MainInfos } from "../../components/MainInfos";
import { BankCard } from "../../components/BankCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { recoverDataUser } from "../../services/communicationApi";
import { setDataUser } from "../../feature/userSlice";
import { useEffect } from "react";

/**
 * component page User
 * @returns {JSX.Element}
 */
export const User = () => {
  const dispatch = useDispatch(); //with this, we can give an order to Redux
  const navigate = useNavigate();
  useEffect(() => {
    //we pass token to recoverDataUserConnect function, then we give an order to Redux : action setAccessDataUsers (for change state of name actual user)
    recoverDataUser(token).then((data) => {
      dispatch(
        setDataUser({
          firstName: data.body.firstName,
          lastName: data.body.lastName,
        })
      );
    });
  }, []); //we call only one time recoverDataUser

  //if user is not connected, redirect to connexion page
  const stateConnect = useSelector((state) => state.user.connect);
  if (stateConnect === false) {
    navigate("./sign-in");
  }

  //recuperation of token
  const token = useSelector((state) => state.user.token);

  //recuperation firstname and lastname in the global state with useSelector() redux method
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  return (
    <div>
      <main className="main bg-dark">
        {/*We pass firstname and lastname of actual state*/}
        <MainInfos firstName={firstName} lastName={lastName} />{" "}
        <BankCard
          accountTitle={"Argent Bank Checking (x8349)"}
          accountAmount={"$2,082.79"}
          accountAmountDescription={"Available Balance"}
        />
        <BankCard
          accountTitle={"Argent Bank Savings (x6712)"}
          accountAmount={"$10,928.42"}
          accountAmountDescription={"Available Balance"}
        />
        <BankCard
          accountTitle={"Argent Bank Credit Card (x8349)"}
          accountAmount={"$184.30"}
          accountAmountDescription={"Current Balance"}
        />
      </main>
    </div>
  );
};
