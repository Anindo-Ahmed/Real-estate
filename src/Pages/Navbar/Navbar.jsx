import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const navLinks = (
    <>
      
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Update Profile</NavLink>
      </li>
      <li>
        <NavLink to="/user">User Profile</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/faq">FAQ</NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOut()
    .then (() => {
        console.log('user logged out successfully!')
    })
    .catch(() => {
        console.error (error)
    })
}
  return (
    <div className="navbar bg-base-100 my-6" >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><FaHome className="text-2xl"/>Dream Home</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end ml-20 tooltip" data-tip={user && user.displayName}>

        {
          user ? <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  src={user ?.photoURl || "https://lh3.googleusercontent.com/a/ACg8ocJgHhvtxR5gilMkt8ygizjQW9i3tyu493hq6lKn1oxWYwcf3VW0=s96-c"}
                  className="bg-base-200"
                />
              </div>
            </div>
                <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                  <li>
                    <a className="justify-between" >
                      {user.displayName}
                    </a>
                  </li>
                  <li onClick={handleLogOut}>
                    <a>Logout</a>
                  </li>
                </ul> 
          </div>
          :
          <Link to="/login"><button>Login</button></Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
