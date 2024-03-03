import { useEffect } from "react";
import { service } from "../constants/index";
import { motion, useAnimation } from "framer-motion";




const Services = () => {
  const controls = useAnimation();

useEffect(() => {
  controls.start({ opacity: 2, y: 0, transition: { duration: 1 }});
}, [controls]);
  return (
    <section className="bg-primary  text-center py-10">
      <div className="text-3xl text-white font-orbitron sm:text-[16px]">
        <h2>
          We Always Provide The Best <span className="text"> Service </span> To
          Present
        </h2>
      </div>
      <p className="text-white font-poppins font-light py-5 text-[16px] sm:text-[10px] ">
        We present a variety of conveniences in our service that you can enjoy
        easily without any problems
      </p>
      <div className="flex flex-wrap justify-center ">
        {service.map((services) => (
          <div
            key={services.id}
            className="bg-[#001F31] p-10 m-4 w-[400px] rounded-xl"
          >
            <motion.img
              src={services.img}
              alt="icons"
              className=" items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
            />
            <h2 className="font-orbitron text-white text-[18px] text-left item-center py-[10px] ">
              {services.title}
            </h2>
            <p className="font-poppins font-light text-white text-left py-[2px] items-center">
              {services.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
