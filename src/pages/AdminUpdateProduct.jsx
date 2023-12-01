import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormUpdateProduct from "../components/FormUpdateProduct";

const AdminUpdateProduct = ({ adminToken }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  return !adminToken ? (
    navigate("/admin/signin")
  ) : isLoading ? (
    <p>Loading ... </p>
  ) : (
    <>
      <div className="container">
        <h1 className="border-b border-solid border-black p-6 text-3xl">
          Mettre à jour un produit
        </h1>
        <div className="p-6">
          <FormUpdateProduct
            setIsLoading={setIsLoading}
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  );
};
export default AdminUpdateProduct;
