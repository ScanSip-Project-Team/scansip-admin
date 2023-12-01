import { useNavigate } from "react-router-dom";

import FormCreateProduct from "../components/FormCreateProduct";

const AdminNewProduct = ({ adminToken }) => {
  const navigate = useNavigate();

  return !adminToken ? (
    navigate("/admin/signin")
  ) : (
    <>
      <div className="container">
        <h1 className="border-b border-solid border-black p-6 text-3xl">
          Créer un produit
        </h1>
        <div className="p-6">
          <FormCreateProduct />
        </div>
      </div>
    </>
  );
};
export default AdminNewProduct;
