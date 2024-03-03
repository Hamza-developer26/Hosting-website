import { NavLink } from "react-router-dom";
import logo from "./assets/logo/logo.png";

const Navbar = () => {
  return (
    <section className="bg-primary font-poppins text-white flex py-[30px] space-x-[200px] items-center sticky top-0 z-[9999]  ">
      <div className="px-11">
        <img src={logo} alt="" />
      </div>
      <nav className="flex-1 justify-center">
        <ul className=" flex space-x-10">
          <NavLink to="/">
            <li>About</li>
          </NavLink>
          <NavLink to="/services">
            <li>Services</li>
          </NavLink>

          <NavLink to="/companies">
            <li>Centers</li>
          </NavLink>

          <NavLink to="/servers/">
            <li>Servers</li>
          </NavLink>

         
          <div className="flex">
            <NavLink to="/customers">
              <li>Customers</li>
            </NavLink>
          </div>
        </ul>
      </nav>

      <div className="relative right-[50px] space-x-3 ">
        <NavLink to='/Login'>
        <button className="border-white border-[1px] h-[40px] text-[15px] w-[100px] rounded">
          Login
        </button>
        </NavLink>
        <NavLink  to={'/Signup'}>
        <button className="button-gradient h-[40px] text-[15px] w-[100px] rounded">
          SignUp
        </button>
        </NavLink>
        
      </div>
    </section>
  );
};

export default Navbar;
