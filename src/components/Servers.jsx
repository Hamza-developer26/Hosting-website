import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "../assets/carousel/carousel.png";
import Carousel2 from "../assets/carousel/carousel2.png";
import Carousel3 from "../assets/carousel/carousel3.png";
import Carousel4 from "../assets/carousel/carousel4.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Vps from "../assets/carousel/vps.png";
import "swiper/css";

const Servers = () => {
  return (
    <>
      <div className="bg-primary ">
        <h2 className="text-white text-3xl font-orbitron text-center py-5">
          Game <span className="text "> servers</span>
        </h2>
        <p className="text-center font-poppins text-white font-light ">
          Strategy startup research & development equity burn rate validation
          customer vesting period <br /> infrastructure seed round bandwidth
          ecosystem infographic market.
        </p>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="bg-primary py-10"
      >
        <SwiperSlide>
          <img src={Carousel2} alt="" />
          <h2 className="text-center text-2xl text-white font-orbitron py-5">
            Need For Speed
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel3} alt="" className="h-[200px]" />
          <h2 className="text-center text-2xl text-white font-orbitron py-5">
            Soccer FootBall
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel} alt="" className="relative h-[200px]" />
          <h2 className="text-center text-2xl text-white font-orbitron py-5">
            Counter Strike
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel2} alt="" />
          <h2 className="text-center text-2xl text-white font-orbitron py-5">
            Need For Speed
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel4} alt="" />
          <h2 className="text-center text-2xl text-white font-orbitron py-5">
            WWE 2024
          </h2>
        </SwiperSlide>
        <div className="flex-1 justify-center">
        <div className="swiper-button-next ">
          <MdKeyboardArrowRight
            size={32}
            className="text-white w-[10%] h-[10%] relative right-[-1000px] cursor-pointer "
          />
        </div>
        <div className="swiper-button-prev">
          <MdKeyboardArrowLeft
            size={32}
            className="text-white w-[10%] h-[10%] relative right-[-25px] top-[-130px] cursor-pointer"
          />
        </div>
        </div>
      </Swiper>
      <div className="bg-primary flex items-center">
        <div className="bg-[#001826] h-[600px] px-12 space-y-6 p-4 pt-[200px] ">
          <h2 className="font-orbitron text-left text-white text-3xl ">
            VPS HOSTING <span className="text"> SERVERS</span>
          </h2>
          <p className="text-white font-poppins w-[600px] font-light leading-7">
            Lorem ipsum dolor sit amet consectetur. Risus a cras ullamcorper
            turpis egestas elementum. Egestas turpis euismod gravida fermentum
            sit libero non. Elit sit amet enim nulla morbi quis erat morbi.
            Tincidunt risus tortor nunc lacus cursus. Rutrum vivamus adipiscing
            amet tempus natoque viverra urna nunc. At in facilisi sed vel nullam
            nibh ut.
          </p>
          <button className="gradient font-poppins p-4 rounded ">Total centers</button>
        </div>
        <div className=" ">
          <img src={Vps} alt="" className=" " />
        </div>
      </div>
    </>
  );
};
export default Servers;
