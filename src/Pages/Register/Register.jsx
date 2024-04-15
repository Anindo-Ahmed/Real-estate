import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [success, setSuccess] = useState(null);
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    // if(!/[^(?=.\d)?=.[a-z](?=.*[A-Z]).{6,20}$]/.test(e.password)){
    //   setRegisterError('please provide a valid password');
    //   return;
    // }
    if (e.password.length < 6) {
      setRegisterError("Please insert minimum 6 characters");
      console.log("Please insert minimum 6 characters");
      return;
    } else if (!/[a-z]/.test(e.password)) {
      setRegisterError("Please insert lower case");
      console.log("Please insert lower case");
      return;
    } else if (!/[A-Z]/.test(e.password)) {
      setRegisterError("Please insert Upper case");
      console.log("Please insert Upper case");
      return;
    }

    //  reset error and successful
    // setSuccess('');
    setRegisterError("");

    createUser(e.email, e.password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Registration successfull");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Dream Home | Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-6">Register Now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name")}
                />
              </div>
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
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photoURL"
                  className="input input-bordered"
                  {...register("photoURL")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex flex-row items-center justify-between">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    {...register("password", { required: true })}
                  />
                  <span onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control my-4">
                <button className="btn bg-[#2a2929] text-white">
                  Register
                </button>
              </div>
              {registerError && (
                <p className="text-red-400 text-center">{registerError}</p>
              )}
              {success && (
                <p className="text-green-400 text-center">{success}</p>
              )}
              <small className="text-center ">
                Already have account? Please
                <Link to="/login" className="text-cyan-400 underline">
                  {" "}
                  Login
                </Link>
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
