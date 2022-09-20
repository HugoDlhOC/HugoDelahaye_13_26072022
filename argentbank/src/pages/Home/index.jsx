import { Banner } from "../../components/Banner";
import { Garenties } from "../../components/Garenties";
import { Header } from "../../components/Header";
import { useSelector } from "react-redux";
import { HeaderUser } from "../../components/HeaderUser";

export const Home = () => {
  const stateConnectUser = useSelector((state) => state.user.connect);
  return (
    <div>
      {/* adapt header for state of user; user connect : headerUser, user disconnect : header */}
      {stateConnectUser === false ? <Header /> : <HeaderUser />} <Banner />
      <Garenties />
    </div>
  );
};
