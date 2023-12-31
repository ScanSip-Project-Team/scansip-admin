//Import Packages
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
//Import Component

// Import Asset
import logo from "../assets/logo.svg";

const Header = ({ setAdminToken, adminToken }) => {
  const navigate = useNavigate();
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayService, setDisplayService] = useState(false);
  const [displayLogout, setDisplayLogout] = useState(false);
  const location = useLocation();
  console.log(location);

  const handleLogOut = () => {
    Cookies.remove("scanSipToken");
    setAdminToken("");
    navigate("/admin/signin");
  };
  return (
    <header
      className={`mb-10 flex items-center bg-black px-4 ${
        !adminToken ? "justify-center" : "justify-between"
      }`}
    >
      <div
        className={`flex w-96 items-center ${
          !adminToken ? "justify-center" : "justify-between"
        }`}
      >
        <img className="w-20" src={logo} alt="" />

        {adminToken && (
          <ul className="flex gap-12">
            <li className="relative cursor-pointer text-white">
              <span
                onClick={(event) => {
                  setDisplayMenu(!displayMenu);
                }}
                className={`mr-2 ${
                  location.pathname === "/admin/products" ||
                  location.pathname === "/admin/new-product"
                    ? "primary-color"
                    : ""
                }`}
              >
                Ma carte
              </span>
              <FontAwesomeIcon
                className={`mx-1 cursor-pointer text-sm text-white `}
                icon="fa-solid fa-chevron-down"
              />

              {displayMenu && (
                <ul className="absolute top-7 w-32 rounded bg-white p-2 text-sm text-black shadow-sm">
                  <Link
                    to="/admin/products"
                    className={`mb-3 block ${
                      location.pathname === "/admin/products"
                        ? "primary-color"
                        : ""
                    }`}
                  >
                    Mes produits
                  </Link>
                  <Link
                    to="/admin/new-product"
                    className={`${
                      location.pathname === "/admin/new-product"
                        ? "primary-color"
                        : ""
                    }`}
                  >
                    Créer produits
                  </Link>
                </ul>
              )}
            </li>
            <li className="relative text-white">
              <span
                onClick={() => {
                  setDisplayService(!displayService);
                }}
                className={`mr-2 ${
                  location.pathname === "/admin/orders" ||
                  location.pathname === "/admin/history"
                    ? "primary-color"
                    : ""
                }`}
              >
                Mon service
              </span>
              <FontAwesomeIcon
                className={`mx-1 cursor-pointer text-sm text-white `}
                icon="fa-solid fa-chevron-down"
              />
              {displayService && (
                <ul className="absolute top-7 w-40 rounded bg-white p-2 text-sm text-black shadow-sm">
                  <Link
                    to="/admin/orders"
                    className={`mb-3 block ${
                      location.pathname === "/admin/orders"
                        ? "primary-color"
                        : ""
                    }`}
                  >
                    Services en cours
                  </Link>
                  <Link>Historique</Link>
                </ul>
              )}
            </li>
          </ul>
        )}
      </div>
      {adminToken && (
        <div className="relative">
          <FontAwesomeIcon
            onClick={() => {
              setDisplayLogout(!displayLogout);
            }}
            className="text-3xl text-white"
            icon="fa-solid fa-user"
          />
          {displayLogout && (
            <div
              className="absolute right-0 top-10 w-40 rounded bg-white p-2 text-sm text-black shadow-sm"
              onClick={() => {
                handleLogOut();
              }}
            >
              Me deconnecter
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
