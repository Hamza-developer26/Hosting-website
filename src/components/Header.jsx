import Headimg from "../assets/section-images/headerimg.png";
import { motion } from "framer-motion";
import Battery from "../assets/logo/battery.png";
import Battery1 from "../assets/logo/battery1.png";
import Battery2 from "../assets/logo/battery2.png";
import Cloud from "../assets/section-images/cloud.png";
const Header = () => {
  return (
    <section className="bg-primary ">
      <div className="flex px-[50px] py-[80px] ">
        <div className="space-y-[20px] relative top-[30px]">
          <h1 className=" text-[50px] text-white font-orbitron text-center md:text-left px-7 md:px-0">
            {" "}
            The Best Hosting <br />{" "}
            <motion.span
              className="text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {" "}
              Solution{" "}
            </motion.span>{" "}
            Website
          </h1>
          <p className="font-poppins text-white leading-[30px] font-light text-center md:text-left">
            {" "}
            Lorem ipsum dolor sit amet consectetur. Urna pharetra egestas ut
            iaculis <br /> nulla purus est elit ut. Turpis bibendum posuere urna
            consectetur.
          </p>
          <button className="font-poppins text-white button-gradient text-[15px] w-[120px] h-[50px] rounded  block mx-auto  md:mx-0 md:my-0">
            Sign up
          </button>
        </div>
        <div className="  w-[50%] h-[50%] relative top-[80px] ">
        <div className="relative md:top-[250px] md:right-[-100px] w-[20%] md:w-auto md:rounded-full md:h-[40%] md:blur-3xl md:button-gradient md:opacity-[30%]"></div>
        <img
  className="hidden md:block w-[200px] h-[200px] md:h-auto md:w-[80%] md:pl-[190px] relative top-[-100px] md:top-0"
  src={Headimg}
  alt=""
/>


          <div className="flex justify-end items-start  ">
            <motion.img
              src={Cloud}
              alt=""
              className=" h-[70px] relative top-[-298px] right-[-18px] hidden md:block   "
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.img
              src={Battery1}
              alt=""
              className=" h-[180px] relative top-[-300px] right-[-125px] hidden md:block  "
              initial={{opacity:0 , y:-200}}
              animate={{opacity:1,  y:0 }}
              transition={{duration: 2}}
            />
            <motion.img
              src={Battery}
              alt=""
              className="h-[150px] ml-4 relative top-[-220px] right-[-95px] hidden md:block "
              initial={{opacity:0 , y:250}}
              animate={{opacity:1,  y:0 }}
              transition={{duration: 2}}
            />
            <motion.img
              src={Battery2}
              alt=""
              className="relative h-[180px] top-[-370px] right-[190px] hidden md:block"
              initial={{opacity:0 , y:-200}}
              animate={{opacity:1,  y:0 }}
              transition={{duration: 1}}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
