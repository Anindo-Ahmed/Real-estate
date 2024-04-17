import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import { FaTwitter, FaX } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Login</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Social</h6> 
    <div className="grid grid-flow-col gap-4">
      <a href=""><FaTwitter className="w-6 h-6"/></a>
      <a href=""><FaYoutube className="w-6 h-6"/></a>
      <a href=""><FaFacebook className="w-6 h-6"/></a>
      <a href=""><FaGithub className="w-6 h-6"/></a>
    </div>
  </nav>
</footer>
    );
};

export default Footer;