import React, { useContext } from "react";
import { AuthContext } from "../Components/provider/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
