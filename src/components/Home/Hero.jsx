import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../Root";

function Hero() {
  let { isLight } = useContext(ThemeContext);
  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y]}
        spaceBetween={50}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
      >
        <SwiperSlide>
          <div
            className={`hero min-h-screen ${
              isLight ? "bg-equi-primary-700" : "bg-equi-primary-900"
            } `}
          >
            <div className=""></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold text-white">
                  Gear Up for Every Adventure
                </h1>
                <p className="mb-5 text-white">
                  From cycling to table tennis, explore our premium range of
                  sports gear tailored to enhance your performance. Elevate your
                  game with quality you can trust.
                </p>
                <Link to="/my-equipments">
                  <button
                    className={`btn ${
                      isLight
                        ? "bg-equi-primary-400 hover:bg-equi-primary-500"
                        : "bg-equi-primary-700 hover:bg-equi-primary-700"
                    }  text-white border-none px-10`}
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`hero min-h-screen  ${
              isLight ? "bg-equi-primary-700" : "bg-equi-primary-900"
            }`}
          >
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold text-white">
                  Customize Your Way to Excellence
                </h1>
                <p className="mb-5 text-white">
                  Personalize your gear to match your style and needs. Whether
                  it's a custom grip or a name engraving, make your sports
                  equipment truly yours.
                </p>
                <Link to="/my-equipments">
                  <button
                    className={`btn ${
                      isLight
                        ? "bg-equi-primary-400 hover:bg-equi-primary-500"
                        : "bg-equi-primary-700 hover:bg-equi-primary-700"
                    }  text-white border-none px-10`}
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`hero min-h-screen  ${
              isLight ? "bg-equi-primary-700" : "bg-equi-primary-900"
            }`}
          >
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold text-white">
                  Fast Delivery, Always in Stock
                </h1>
                <p className="mb-5 text-white">
                  Get your favorite sports products delivered quickly. With high
                  stock availability, you're just a few clicks away from your
                  next adventure.
                </p>
                <Link to="/my-equipments">
                  <button
                    className={`btn ${
                      isLight
                        ? "bg-equi-primary-400 hover:bg-equi-primary-500"
                        : "bg-equi-primary-700 hover:bg-equi-primary-700"
                    }  text-white border-none px-10`}
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;
