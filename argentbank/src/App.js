import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Connexion } from "./pages/Connexion";
import { User } from "./pages/User";
import { home, userPage, signIn } from "./routes/routes";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path={home} element={<Home />}></Route>
        <Route path={signIn} element={<Connexion />}></Route>
        <Route path={userPage} element={<User />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
