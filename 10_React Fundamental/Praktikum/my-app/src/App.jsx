import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import LandingPage from "./pages/LandingPage";
import CreateProduct from "./pages/CreateProduct";
import DetailProduct from "./pages/DetailProduct";
import { ListProduct } from "./pages/ListProduct";
import CreateAccount from "./pages/CreateAccount";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/createaccount" Component={CreateAccount} />
        <Route path="/listproduct" Component={ListProduct} />
        <Route path="/createproduct" Component={CreateProduct} />
        <Route path="/detailproduct/:id" Component={DetailProduct} />
      </Routes>
    </>
  );
}

export default App;
