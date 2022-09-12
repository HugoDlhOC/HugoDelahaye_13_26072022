import {MainInfos} from "../../components/MainInfos";
import {BankCard} from "../../components/BankCard";

export const User = () => {
    return <main className="main bg-dark">
        <MainInfos name={"Tony Jarvis"}/>
        <BankCard accountTitle={"Argent Bank Checking (x8349)"} accountAmount={"$2,082.79"} accountAmountDescription={"Available Balance"}/>
        <BankCard accountTitle={"Argent Bank Savings (x6712)"} accountAmount={"$10,928.42"} accountAmountDescription={"Available Balance"}/>
        <BankCard accountTitle={"Argent Bank Credit Card (x8349)"} accountAmount={"$184.30"} accountAmountDescription={"Current Balance"}/>
    </main>
}