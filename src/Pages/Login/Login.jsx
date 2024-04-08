import { useContext, useRef } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
    const {userLogin, googleLogin} = useContext(AuthContext);
    const emailRef = useRef(null);

    const handleLogin = () => {
        userLogin(email, password)
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
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  ref={emailRef}
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
              <div className="form-control my-6 gap-3">
                <button className="btn btn-success">Login</button>
                <button onClick={handleGoogleSignIn} className="btn btn-ghost">Signin with Google</button>
                <button>Signin with github</button>
              </div>
              <small className="text-center ">New User? Please <Link to="/register" className="text-cyan-400 underline">Register</Link> </small>
            </form> 
          </div>
        </div>
      </div>
    );
};

export default Login;