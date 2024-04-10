import { useContext, useRef } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Login = () => {
    const {userLogin, googleLogin} = useContext(AuthContext);
    

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = (e) => {
     
      userLogin(e.email, e.password)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.error(error);
    })
    };

    const handleGoogleSignIn = () => {
        googleLogin()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-6">Login Now!</h1>
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
              {errors.email && <span className="text-red-500">This field is required</span>}
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
                  {errors.password && <span className="text-red-500">This field is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control my-6 gap-3">
                <button className="btn btn-success">Login</button>
                <button onClick={handleGoogleSignIn} className="btn btn-ghost"><FaGoogle/> Login with Google</button>
                <button className="btn btn-ghost"><FaGithub/> Login with github</button>
              </div>
              <small className="text-center ">New User? Please <Link to="/register" className="text-cyan-400 underline">Register</Link> </small>
            </form> 
          </div>
        </div>
      </div>
    );
};

export default Login;