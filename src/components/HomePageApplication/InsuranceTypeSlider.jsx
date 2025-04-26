import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Bg from "../../assets/images/Backgrounds/sectionTwo.jpg";

// Images
import AutoImg from "../../assets/images/insurance_type/Auto.jpg";
import BusinessImg from "../../assets/images/insurance_type/Business.jpg";
import HomeImg from "../../assets/images/insurance_type/Home.jpg";
import BobtailImg from "../../assets/images/insurance_type/Bobtail.jpg";
import TruckingImg from "../../assets/images/insurance_type/Trucking.jpg";
import MotorcycleImg from "../../assets/images/insurance_type/Motorcycle.jpg";
import BoatImg from "../../assets/images/insurance_type/Boat.jpg";
import FloodImg from "../../assets/images/insurance_type/Flood.jpg";
import CondoImg from "../../assets/images/insurance_type/Condo.jpg";
import CommercialImg from "../../assets/images/insurance_type/Commercial.jpg";
import MobileHomeImg from "../../assets/images/insurance_type/MobileHome.jpg";
import RentersImg from "../../assets/images/insurance_type/Renters.jpg";

const slides = [
  {
    label: "Auto Insurance",
    image: AutoImg,
    desc: "Protects drivers financially against vehicle damages, injuries, and liabilities from auto-related incidents or accidents.",
  },
  {
    label: "Business Insurance",
    image: BusinessImg,
    desc: "Covers businesses from financial losses due to property damage, liability, or operational interruptions.",
  },
  {
    label: "Homeowners Insurance",
    image: HomeImg,
    desc: "Safeguards homes financially against damages, theft, liability, and unexpected disasters.",
  },
  {
    label: "Bobtail Insurance",
    image: BobtailImg,
    desc: "Covers trucks when driven without a trailer, protecting against accidents and associated liability costs.",
  },
  {
    label: "Trucking Insurance",
    image: TruckingImg,
    desc: "Commercial truck protection from accidents, cargo damage, and liability.",
  },
  {
    label: "Motorcycle Insurance",
    image: MotorcycleImg,
    desc: "Protects riders financially, covering injuries, damage, and liability from motorcycle incidents.",
  },
  {
    label: "Boat Insurance",
    image: BoatImg,
    desc: "Protects boat owners from damage, liability, and theft involving boats.",
  },
  {
    label: "Flood Insurance",
    image: FloodImg,
    desc: "Covers property damage and loss specifically caused by flooding.",
  },
  {
    label: "Condo Insurance",
    image: CondoImg,
    desc: "Covers interior damages, liability, and property inside condo units.",
  },
  {
    label: "Commercial Auto Insurance",
    image: CommercialImg,
    desc: "Covers businesses for auto accidents and vehicle damage involving employees.",
  },
  {
    label: "Mobile Home Insurance",
    image: MobileHomeImg,
    desc: "Protects mobile homes against theft, damage, and liability risks.",
  },
  {
    label: "Renters Insurance",
    image: RentersImg,
    desc: "Affordable protection for renters covering belongings and liability.",
  },
];

const InsuranceTypeSlider = () => {
  return (
    <section
      className="relative py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#FAF3F0]">
          What We Insure
        </h2>
        <p className="text-[#FFEEDD] text-base md:text-lg mb-16 max-w-3xl mx-auto">
          Explore personalized insurance coverage for Floridians
        </p>

        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={1.2}
          breakpoints={{
            768: { slidesPerView: 2.1 },
            1024: { slidesPerView: 3 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1.5,
            slideShadows: false,
          }}
          navigation
          pagination={{ clickable: true }}
          className="w-full"
        >
          {slides.map(({ label, image, desc }) => (
            <SwiperSlide
              key={label}
              className="transition-all duration-500 px-2"
            >
              <div className="relative w-full h-[460px] sm:h-[500px] md:h-[580px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition">
                <img
                  src={image}
                  alt={label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 z-0" />
                <div className="absolute bottom-0 left-0 p-5 z-10 text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {label}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 max-w-md">
                    {desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>{`
          .swiper-slide {
            opacity: 0.5;
            transform: scale(0.85);
            transition: all 0.6s ease;
          }
          .swiper-slide-active {
            transform: scale(1.05);
            opacity: 1;
            z-index: 10;
          }
          .swiper-button-prev,
          .swiper-button-next {
            color: rgba(255, 255, 255, 0.6);
            width: 44px;
            height: 44px;
            top: 50%;
            transform: translateY(-50%);
          }
          .swiper-button-prev { left: -60px; }
          .swiper-button-next { right: -60px; }
          .swiper-pagination {
            margin-top: 32px !important;
            position: relative !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default InsuranceTypeSlider;
