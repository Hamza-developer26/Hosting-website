import Map from "../assets/map/map.png";
import { motion } from "framer-motion";

const Centers = () => {
  return (
    <section className="bg-primary">
      <div className="py-10">
        <h2 className="font-orbitron text-white text-2xl sm:text-3xl md:text-4xl lg:text-3xl text-center">
          Awesome <span className="text">centers</span> all around the world,
          uptime guarantee
        </h2>
        <p className="font-poppins text-center text-white font-light pt-3 text-base sm:text-sm md:text-base lg:text-lg">
          Strategy startup research & development equity burn rate validation
          customer vesting period.
        </p>
        <p className="font-poppins text-center text-white font-light text-base sm:text-xs md:text-sm lg:text-base">
          {" "}
          infrastructure seed round bandwidth ecosystem infographic market.
        </p>
      </div>
      <div className="grid place-items-center relative top-10 sm:top-20 md:top-30 lg:top-40">
        <img src={Map} alt="" />
        <motion.div
          className="pb-10  md:pb-20 lg:pb-32 flex flex-col md:flex-row items-center justify-center relative md:right-0 lg:right-[-500px] top-0 md:top-[-100px]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white font-poppins font-semibold text-xl md:text-2xl lg:text-3xl mb-4 md:mb-0 md:mr-6"
          >
            USA UK
          </motion.h2>

          <motion.div
            className="h-5 w-5 gradient bg-opacity-100 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <motion.div
              className="h-[50px] w-[50px] gradient opacity-[20%] rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <motion.div
                className="h-[50px] w-[50px] gradient opacity-[20%] rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="pb-10 top-[-350px] right-[-100px]  md:pb-20 lg:pb-32 flex flex-col md:flex-row items-center justify-center relative md:right-[400px] lg:right-[100px]  md:top-[-200px]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white font-poppins font-semibold text-xl md:text-2xl lg:text-3xl mb-4 md:mb-0 md:mr-6"
          >
            DUBAI
          </motion.h2>

          <motion.div
            className="h-5 w-5 gradient bg-opacity-100 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <motion.div
              className="h-[50px] w-[50px] gradient opacity-[20%] rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <motion.div
                className="h-[50px] w-[50px] gradient opacity-[20%] rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="pb-10 top-[-300px] right-[100px]  md:pb-20 lg:pb-32 flex flex-col md:flex-row items-center justify-center relative md:right-[300px]  lg:top-[-500px]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white font-poppins font-semibold text-xl md:text-2xl lg:text-3xl mb-4 md:mb-0 md:mr-6"
          >
            PAKISTAN
          </motion.h2>

          <motion.div
            className="h-5 w-5 gradient bg-opacity-100 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <motion.div
              className="h-[50px] w-[50px] gradient opacity-[20%] rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <motion.div
                className="h-[50px] w-[50px] gradient opacity-[20%] rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="pb-10 top-[-450px]  md:pb-20 lg:pb-32 flex flex-col md:flex-row items-center justify-center relative md:left-[0%] lg:right-0 lg:top-[-900px]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white font-poppins font-semibold text-xl md:text-2xl lg:text-3xl mb-4 md:mb-0 md:mr-6"
          >
            SAUDIA
          </motion.h2>

          <motion.div
            className="h-5 w-5 gradient bg-opacity-100 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <motion.div
              className="h-[50px] w-[50px] gradient opacity-[20%] rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <motion.div
                className="h-[50px] w-[50px] gradient opacity-[20%] rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Centers;
