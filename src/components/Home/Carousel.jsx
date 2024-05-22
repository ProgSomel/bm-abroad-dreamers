// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="my-6">
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          
        }}
       
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="" >
        <div className="rounded-[25px] h-40 md:h-[400px] lg:h-[450px] w-full"
            style={{
              backgroundImage: "url('https://cdn.sanity.io/images/s37229yn/production/4cd5fa6a77a8c34cc26af1f6e31f1205f9dcd852-6400x3104.png?w=1600&auto=format')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              
             
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="rounded-[25px] h-40 md:h-[400px] lg:h-[450px] w-full"
            style={{
              backgroundImage: "url('https://cdn.sanity.io/images/s37229yn/production/21f0f7ab2777513b48be97e55f00052c3bee6b9d-6400x3104.png?w=1600&auto=format')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",

             
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="rounded-[25px] h-40 md:h-[400px] lg:h-[450px] w-full"
            style={{
              backgroundImage: "url('https://cdn.sanity.io/images/s37229yn/production/314896e4d892996c74bf14643e45243ef6a152fe-6400x3104.png?w=1600&auto=format')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

Carousel.propTypes = {};

export default Carousel;
