import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { reviews } from "./reviewsData";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return `${"★".repeat(full)}${half ? "½" : ""}${"☆".repeat(empty)}`;
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#141E30] to-[#243B55] pt-40 pb-28 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#FFB347] text-center mb-6 drop-shadow-lg">
            🌟 Voices That Matter Most
          </h1>
          <p className="text-center text-xl text-white/80 max-w-3xl mx-auto">
            Our customers say it better than we ever could. Read firsthand how
            we’ve helped Floridians protect what matters most.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          className="w-full"
        >
          {reviews.map(({ author, snippet, rating, date, avatar }, idx) => (
            <SwiperSlide key={idx} className="flex flex-col">
              <div
                onClick={() =>
                  setExpandedIndex(idx === expandedIndex ? null : idx)
                }
                className="cursor-pointer flex flex-col flex-1 bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl text-center transition-transform duration-300 hover:scale-[1.01]"
              >
                <img
                  loading="lazy"
                  src={
                    avatar ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      author
                    )}&background=random&color=fff`
                  }
                  alt={author}
                  className="w-20 h-20 rounded-full border-2 border-white mx-auto mb-4 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      author
                    )}&background=random&color=fff`;
                  }}
                />
                <div className="text-sm italic text-white/70 mb-2">{date}</div>
                <p className="text-lg text-white/90 mb-4">
                  “
                  {expandedIndex === idx
                    ? snippet
                    : snippet.length > 120
                    ? snippet.slice(0, 120) + "..."
                    : snippet}
                  ”
                </p>
                <div className="text-[#FFB347] text-xl mb-2">
                  {renderStars(rating)}
                </div>
                <div className="text-white font-semibold text-xl">{author}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-12 flex justify-center relative z-10">
          <div className="custom-pagination swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Insurance+Planet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#FF512F] to-[#F09819] text-lg font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform"
          >
            📝 Leave a Google Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
