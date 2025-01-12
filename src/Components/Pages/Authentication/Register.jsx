import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import img2 from "../../../assets/others/authentication1.png";
import bgSignup from "../../../assets/others/authentication.png";
import goggle from "../../../assets/others/google (2).png";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SocialLogin from "../../SocialLogin/SocialLogin";
const Register = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL).then(() => {
        const userInfo = {
          name: data.name,
          email: data.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            reset();
            Swal.fire({
              title: " Successful",
              text: "You create your profile  successfully!!",
              icon: "success",
            });
            navigate("/");
          }
        });
      });
    });
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('${bgSignup}')`,
        }}
        className="hero min-h-screen"
      >
        <div
          style={{
            backgroundImage: `url('${bgSignup}')`,
            boxShadow: " 0 0 10px rgba(0, 0, 0, 0.5)",
            borderRadius: "8px",
          }}
          className="hero-content gap-10  flex-col lg:flex-row-reverse"
        >
          <div className="text-center md:w-1/2 lg:text-left">
            <img
              style={{
                backgroundImage: `url('${bgSignup}')`,
              }}
              src={img2}
              alt=""
            />
          </div>
          <div className="card  w-1/2 max-w-sm ">
            <h2 className="text-center text-2xl font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="url"
                  {...register("photoURL", { required: true })}
                  placeholder="Your PhotoURL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">
                    Password must be at least 6 character
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be lower than 20 character
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must be one uppercase,one lowercase, one digit, one
                    special character
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="SignUp"
                />
              </div>
            </form>

            <p className="text-center text-[#D1A054] mb-2">
              <small>
                Already Have an account? <Link to="/login">SignIn Here</Link>
              </small>
            </p>
            <div className="text-center text-[#D1A054] ">
              <small className="">Or SignUp with</small>

              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
