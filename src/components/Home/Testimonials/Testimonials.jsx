/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";

// Import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="my-12 lg:my-24">
      <div className="border-indigo-500 border-l-[10px]">
        <div className="ml-4">
          <h1 className="text-[30px] md:text-[64px] font-bold font-oswald">
            TESTIMONIALS
          </h1>
          <p className="font-poppins font-extralight">
            Our students shared their visa success stories
          </p>
        </div>
      </div>

      {/* slide  */}
      <div className="mt-12 lg:px-12">
        <Swiper
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="bg-base-200 flex flex-col md:flex-row items-center rounded-tl-[24px] rounded-tr-[24px] md:rounded-[24px] lg:w-3/4 lg:mx-auto">
              {/* Hero */}
              <div className="w-full md:w-1/3">
                <div
                  className="hero h-[500px] rounded-tl-[24px] rounded-tr-[24px] md:rounded-tr-none md:rounded-[24px] rounded-br-none md:rounded-br-none"
                  style={{
                    backgroundImage:
                      "url(https://cdn.sanity.io/images/s37229yn/production/1838ecd4c726dd9ecacbc348c3aa2003e4271af3-764x1024.jpg?rect=0,0,764,859&w=640&auto=format)",
                  }}
                >
                  <div className="rounded-tl-[24px] rounded-tr-[24px] md:rounded-tr-none md:rounded-tl-[24px] md:rounded-bl-[24px] md:rounded-br-none"></div>
                  <div className="hero-content text-center text-neutral-content relative">
                    <div className="max-w-md absolute -bottom-[220px] -right-12">
                      <h1 className="mb-1 text-2xl font-bold font-poppins text-nowrap text-white">
                        Al Reasat Rafio
                      </h1>
                      <p className="mb-5 text-nowrap font-light text-white">
                        Western Sydney University,
                        <br />
                        <span className="absolute -bottom-[2px] left-0">
                          Australia
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* content */}
              <div className="md:w-2/3 p-4 md:px-12">
                <h1 className="text-4xl lg:text-nowrap font-poppins">
                  BM Abroad Dreamers <br /> Agency is the trusted <br /> friend
                </h1>

                <p className="font-poppins gap-2 font-light mt-8">
                  "BM Abroad Dreamers Agency has been my guiding light on this
                  incredible journey of studying abroad. Their unwavering
                  support and expert guidance have been the key to unlocking the
                  doors to my dream education overseas. With their help, I've
                  embarked on a life-changing adventure, embracing new cultures,
                  and building memories that will last a lifetime. For anyone
                  with aspirations of studying abroad, BM Abroad Dreamers Agency
                  is the trusted friend you need to turn your dreams into
                  reality."
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="bg-base-200 flex flex-col md:flex-row items-center rounded-tl-[24px] rounded-tr-[24px] md:rounded-[24px] lg:w-3/4 lg:mx-auto">
              {/* Hero */}
              <div className="w-full md:w-1/3">
                <div
                  className="hero h-[500px] rounded-tl-[24px] rounded-tr-[24px] md:rounded-tr-none md:rounded-[24px] md:rounded-br-none"
                  style={{
                    backgroundImage:
                      "url(https://cdn.sanity.io/images/s37229yn/production/04d39ea679cca9c102f95bcc297f3849bbecd856-764x1024.jpg?w=640&auto=format)",
                  }}
                >
                  <div className="rounded-tl-[24px] rounded-tr-[24px] md:rounded-tr-none md:rounded-tl-[24px] md:rounded-bl-[24px] md:rounded-br-none"></div>
                  <div className="hero-content text-center text-neutral-content relative">
                    <div className="max-w-md absolute -bottom-[220px] -right-[85px] md:-right-24 lg:-right-20">
                      <h1 className="mb-1 text-2xl font-bold font-poppins text-nowrap text-white">
                        Saniat Uddin Sayel
                      </h1>
                      <p className="mb-5 text-nowrap font-light text-white">
                        Federation University, Australia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* content */}
              <div className="md:w-2/3 p-4 md:px-12">
                <h1 className="text-4xl font-poppins">
                  They were everywhere for me
                </h1>

                <p className="font-poppins gap-2 font-light mt-8">
                  "BM Abroad Dreamers Agency played a pivotal role in making my
                  study abroad dreams come true. Their expert guidance and
                  unwavering support were instrumental at every step of my
                  journey. From helping me navigate the intricate application
                  process to offering personalized advice on scholarships and
                  visa requirements, they were there for me. Thanks to their
                  dedicated assistance, I am now living the experience of a
                  lifetime, studying in a foreign country, immersing myself in a
                  new culture, and gaining a global perspective. This incredible
                  journey wouldn't have been possible without BM Abroad
                  Dreamers."
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

Testimonials.propTypes = {};

export default Testimonials;
