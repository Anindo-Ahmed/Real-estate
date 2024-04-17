import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import banner1 from "../../assets/banner 3.jpeg";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { userLogin, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    userLogin(e.email, e.password)
      .then((result) => {
        console.log(result.user);
        alert('Login Successfull');
        navigate(location ?.state ? location.state : '/')
      })
      .catch((error) => {
        console.error(error);
        alert('Please provide correct Password', error)
        
      });
  };

  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
        
      });
  };

  const handlegithubSignIn = () => {
    githubLogin()
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.error(error); 
    });
  }
  return (
    <div>
      <Helmet>
        <title>Dream Home | Login</title>
      </Helmet>
      <div className="hero min-h-screen">
        <img src={banner1} alt="" />
        <div className="hero-content flex-col">
          <div className="text-start lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Login Now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
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
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mb-4">
                <button className="btn bg-[#2a2929] text-white">Login</button>
                <div className="flex flex-row justify-center items-center my-4">
                  <hr className="w-10 mr-3" /> <small>Social login</small>{" "}
                  <hr className="w-10 ml-3" />
                </div>
                <div className="flex flex-row justify-center">
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-ghost"
                  >
                    <FaGoogle />{" "}
                  </button>
                  <button 
                    onClick={handlegithubSignIn}
                    className="btn btn-ghost">
                    <FaGithub />{" "}
                  </button>
                </div>
              </div>
              <small className="text-center ">
                New User? Please{" "}
                <Link to="/register" className="text-cyan-400 underline">
                  Register
                </Link>{" "}
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
