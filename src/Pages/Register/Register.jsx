import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = () => {
        e.preventDefault();


        createUser(email, password)
        .then(result => {
            console.log(result.user)
            setSuccess('Registration is successfull!')
            e.target.reset()
        })
        .catch(error => {
            console.error(error);
            setRegisterError(error.message)
        })
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-6">Register Now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name = "email"
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control my-6">
              <button className="btn btn-success">Register</button>
            </div>
            
            <small className="text-center ">
              Already have account? Please
            <Link to="/login" className="text-cyan-400 underline"> Login
              </Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
