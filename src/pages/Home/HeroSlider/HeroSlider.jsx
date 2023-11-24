import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const HeroSlider = () => {
  return (
    <section>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{ delay: 10000 }}
      >
        <SwiperSlide>
          <div
            className="hero h-[75vh]"
            style={{
              backgroundImage:
                "url(https://plus.unsplash.com/premium_photo-1661443781814-333019eaad2d)",
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md space-y-3">
                <h2 className="text-4xl md:text-5xl">Empower Your Voice</h2>
                <p>
                  Participate in surveys, share your opinions, and influence
                  change.
                </p>
                <button className="primary-button">Explore Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[75vh]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1434626881859-194d67b2b86f)",
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md space-y-3">
                <h2 className="text-4xl md:text-5xl">Empower Your Voice</h2>
                <p>
                  Participate in surveys, share your opinions, and influence
                  change.
                </p>
                <button className="primary-button">Explore Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
