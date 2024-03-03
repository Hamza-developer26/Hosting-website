import Aboutpic from "../assets/logo/About.png";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { toggleExpand } from "../Reduxtoolkit/Createslice";
import {motion } from 'framer-motion'

const About = () => {
  const dispatch = useDispatch();
  const isExpanded = useSelector((state) => state.expandableText.isExpanded);

  const handleToggleExpand = () => {
    dispatch(toggleExpand());
  };

  return (
    <>
      <Header />
      <section className="bg-primary">
        <div className="flex-1 bg-[#001826]">
          <div className="flex gap-10 py-10 ">
            <div className="px-10 items-center">
              <div className="fixed bottom-[50px] left-[-100px] w-[20%] rounded-full h-[40%] blur-3xl  button-gradient opacity-[20%]"></div>
              <motion.div 
              initial={{ x: 0, opacity: 1 }}
              animate={isExpanded ? { x: -50, opacity: 0.2, scale: 1 } : { x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative">
              <img className="w-[2000px] sticky z-20" src={Aboutpic} alt="" />
              </motion.div>
            </div>
            <div className="px-10 space-y-6">
              <h2 className="font-orbitron text-[40px]  text-white">
                About <span className="text">Us</span>
              </h2>
              <p className="font-poppins text-white font-light leading-[30px]">
                {isExpanded
                  ? "Welcome to Atom & sync, your trusted partner in web hosting excellence. With a passion for cutting-edge technology and unwavering commitment, we provide tailored hosting solutions to elevate your online presence. Backed by a team of industry experts, Atom & sync is dedicated to ensuring the reliability, performance, and security of your digital journey. Choose us for hosting that goes beyond expectations – where your success is our priority.Welcome to Atom & sync, your trusted partner in web hosting excellence. With a passion for cutting-edge technology and unwavering commitment, we provide tailored hosting solutions to elevate your online presence."
                  : "Lorem ipsum dolor sit amet consectetur. Risus a cras ullamcorper turpis egestas elementum. Egestas turpis euismod gravida fermentum sit libero non. Elit sit amet enim nulla morbi quis erat morbi. Tincidunt risus tortor nunc lacus cursus. Rutrum vivamus adipiscing amet tempus natoque viverra urna nunc. At in facilisi sed vel nullam nibh ut."}
              </p>
              <button
                onClick={handleToggleExpand}
                className="button-gradient text-white font-poppins w-[150px] h-[50px] text-[15px] rounded "
              >
                {isExpanded ? "Read Less" : "Learn More"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
