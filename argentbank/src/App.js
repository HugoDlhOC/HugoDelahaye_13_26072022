import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Garenties } from "./components/Garenties";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Connexion } from "./pages/Connexion";
import { User } from "./pages/User";
import { store } from "./app/store";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Home />}></Route>
        <Route path={"/sign-in"} element={<Connexion />}></Route>
        <Route path={"/user"} element={<User />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
