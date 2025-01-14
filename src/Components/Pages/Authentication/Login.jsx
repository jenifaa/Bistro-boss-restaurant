import React, { useContext, useEffect, useRef, useState } from "react";
import img1 from "../../../assets/others/authentication1.png";
import bgImg from "../../../assets/others/authentication.png";
import goggle from "../../../assets/others/google (2).png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../SocialLogin/SocialLogin";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [disable, setDisable] = useState(true);
  const { signIn, setLoading } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
   
    signIn(email, password).then((result) => {
      const user = result.user;
      Swal.fire({
        title: "Login Successful",
        text: "You Logged in successfully!!",
        icon: "success",
      });
      navigate(from, { replace: true });
    });
  };
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
 
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url('${bgImg}')`,
        }}
      >
        <div
          className="hero-content gap-16 py-8 flex-col md:flex-row"
          style={{
            backgroundImage: `url('${bgImg}')`,
            boxShadow: " 0 0 10px rgba(0, 0, 0, 0.5)",
            borderRadius: "8px",
          }}
        >
          <div className="text-center md:w-1/2 lg:text-left">
            <img
              style={{
                backgroundImage: `url('${bgImg}')`,
              }}
              src={img1}
              alt=""
            />
          </div>
          <div className="card  w-1/2 max-w-sm font-semibold">
            <h2 className="text-center text-2xl font-bold">Login</h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type the text above"
                  className="input input-bordered"
                  required
                />
                {/* <button
                 
                  className="btn btn-outline btn-xs mt-3 w-[30%] mx-auto"
                >
                  Validate
                </button> */}
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disable}
                  className="py-3 bg-opacity-70 rounded-lg text-white font-bold bg-[#D1A054]"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center text-[#D1A054] mb-2">
              <small>
                New Here? Create an Account -<Link to="/register">SingUp</Link>
              </small>
            </p>
            <div className="text-center text-[#D1A054] ">
              <small>Or Sign in with</small>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
