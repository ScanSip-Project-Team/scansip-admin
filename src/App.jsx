//Import Package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronDown,
  faChevronUp,
  faUser,
  faCircleXmark,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

//Import Components
import FlashScreen from "./pages/FlashScreen";
import Orders from "./pages/Orders";
import Lab from "./pages/Lab";
import AdminProducts from "./pages/AdminProducts";
import AdminNewProduct from "./pages/AdminNewProduct";
import Header from "./components/Header";
import Cookies from "js-cookie";

// Import Assets
import "./App.css";
import AdminUpdateProduct from "./Pages/AdminUpdateProduct";
import AdminSignUp from "./Pages/AdminSignUp";
import AdminSignIn from "./Pages/AdminSignIn";

library.add(
  faChevronDown,
  faChevronUp,
  faUser,
  faCircleXmark,
  faPenToSquare,
  faTrashCan
);
function App() {
  //Yohann : J'ai déplacer deux states ici pour récuperer leurs informations sur ma page billing, si besoin d'info me contacter
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [adminToken, setAdminToken] = useState("");

  useEffect(() => {
    setAdminToken(Cookies.get("scanSipToken"));
  }, []);
  return (
    <Router>
      <Header setAdminToken={setAdminToken} adminToken={adminToken} />
      <Routes>
        <Route path="/" element={<FlashScreen />} />
        <Route
          path="/admin/signup"
          element={
            <AdminSignUp
              adminToken={adminToken}
              setAdminToken={setAdminToken}
            />
          }
        />
        <Route
          path="/admin/signin"
          element={
            <AdminSignIn
              adminToken={adminToken}
              setAdminToken={setAdminToken}
            />
          }
        />
        <Route
          path="/admin/orders"
          element={
            <Orders adminToken={adminToken} setAdminToken={setAdminToken} />
          }
        />
        <Route
          path="/admin/products"
          element={<AdminProducts adminToken={adminToken} />}
        />
        <Route
          path="/admin/new-product"
          element={<AdminNewProduct adminToken={adminToken} />}
        />
        <Route
          path="/admin/update-product"
          element={<AdminUpdateProduct adminToken={adminToken} />}
        ></Route>

        {/* page de test SAMUEL */}
        <Route path="/lab" element={<Lab />} />
        {/* <Route path="/orders" element={<Orders />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
