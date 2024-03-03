import Map from "../assets/map/map.png";
import {motion} from 'framer-motion'

const Centers = () => {
  return (
    <section className="bg-primary">
      <div className="py-10">
        <h2 className="font-orbitron text-white text-3xl text-center">
          Awesome <span className="text">centers</span> all around the world,
          uptime guarantee
        </h2>
        <p className="font-poppins text-center text-white font-light pt-3">
          Strategy startup research & development equity burn rate validation
          customer vesting period.
        </p>
        <p className="font-poppins text-center text-white font-light">
          {" "}
          infrastructure seed round bandwidth ecosystem infographic market.
        </p>
      </div>
      <div className="grid place-items-center relative top-[100px] ">
        <img src={Map} alt="" />
        <motion.div
      className="pb-[100px] flex items-center justify-center relative right-[-500px] top-[-100px]"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
        <motion.h2 initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 } }
              transition={{ duration: 1 }} className="text-white font-poppins relative right-[20px] font-semi-bold">USA UK</motion.h2>
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
      className="pb-[100px] flex items-center justify-center relative right-[400px] top-[-100px]"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 } }
              transition={{ duration: 1 }} className="text-white font-poppins relative right-[20px] font-semi-bold">DUBAI</motion.h2>
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
      className="pb-[100px] flex items-center justify-center relative right-[300px] top-[-500px]"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 } }
              transition={{ duration: 1 }} className="text-white font-poppins relative right-[20px] font-semi-bold">PAKISTAN</motion.h2>
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
      className="pb-[100px] flex items-center justify-center relative right-[100px] top-[-600px]"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 } }
              transition={{ duration: 1 }} className="text-white font-poppins relative right-[20px] font-semi-bold">SAUDIA</motion.h2>
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
