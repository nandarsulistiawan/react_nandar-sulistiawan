import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import LandingPage from "./pages/LandingPage";
import CreateAccount from "./pages/CreateAccount";
import CreateProduct from "./pages/CreateProduct";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/createaccount" Component={CreateAccount} />
        <Route path="/createproduct" Component={CreateProduct} />
      </Routes>
    </>
  );
}

export default App;
