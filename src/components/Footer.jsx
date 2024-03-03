import Logo from "../assets/logo/logo.png";
import Card from "../assets/footer/footercard.png";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-primary py-8 text-white font-poppins flex flex-col items-center justify-center md:flex-row md:items-center md:justify-center">
      <div className="mb-4 md:mb-0 md:mr-[210px] ">
        <img src={Logo} alt={Logo} className="w-32 md:w-auto" />
        <img
          src={Card}
          alt=""
          className="cursor-pointer text-sm mt-2"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-[100px] text-center md:text-left">
        <div className="mb-8 md:mb-0">
          <h1 className="text-2xl font-orbitron py-4">Useful Links</h1>
          <ul className="space-y-4 cursor-pointer">
            <li className="hover:text-[#60B6F3] duration-500">
              <NavLink to="/">About</NavLink>
            </li>
            <li className="hover:text-[#60B6F3] duration-500">
              <NavLink to="/services">Services</NavLink>
            </li>
            <li className="hover:text-[#60B6F3] duration-500">
              <NavLink to="/companies">Companies</NavLink>
            </li>
            <li className="hover:text-[#60B6F3] duration-500">
              <NavLink to="/servers">Servers</NavLink>
            </li>
            <li className="hover:text-[#60B6F3] duration-500">
              <NavLink to="/customers">Customers</NavLink>
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h1 className="text-2xl font-orbitron py-4">Get In Touch</h1>
          <div className="space-y-4">
            <p>0811-233-8899</p>
            <p>Async@email.com</p>
            <p>
              Lorem ipsum dolor <br />
              sit amet consectetur.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl py-4 font-orbitron">Social Links</h1>
          <div className="flex gap-5 cursor-pointer">
            <FaFacebookF size={20} />
            <FaYoutube size={20} />
            <FaTwitter size={20} />
            <FaInstagram size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
