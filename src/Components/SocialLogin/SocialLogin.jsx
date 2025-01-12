import React from "react";
import goggle from "../../assets/icon/search.png";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
     
    });
  };
  return (
    <div className="flex justify-center items-center mt-2">
      <div className=" py-2 rounded-full border-2 border-gray-300 w-[50%]">
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center gap-2 px-4"
        >
          <img className="w-8" src={goggle} alt="" />
          SignIn/SignUp
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
