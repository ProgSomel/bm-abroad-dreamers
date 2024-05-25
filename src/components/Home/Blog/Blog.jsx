// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'animate.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {

    
 const [blogs, setBlogs] = useState([]);

 useEffect(() => {
   const fetchData = async () => {
     try {
       const { data } = await axios("blogs.json");
       setBlogs(data);
     } catch (error) {
       console.error("Error fetching data: ", error);
     }
   };
   fetchData();
 }, []);


 

  return (
    <div className="mt-24">
      <div className="border-indigo-500 border-l-[10px]">
        <div className="ml-4">
          <h1 className="text-[30px] md:text-[64px] font-bold font-oswald">
            BLOGS
          </h1>
          <p className="font-poppins font-extralight">
            Study in your Dream Destination
          </p>
        </div>
      </div>

      {/* Slide */}
      <div className="my-12">
        <Swiper
          slidesPerView={1} 
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide className="mt-12"  key={index}>
              <div className="card card-compact lg:w-96 ">
                <figure>
                  <img
                    src={blog?.image}
                    className="rounded-[24px]"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <div className="flex items-center gap-2">
                    <span><img src="https://www.bmabroaddreamers.com/icons/calender.svg" alt="" /></span>
                    <p className="text-[14px] font-light text-[$#0003]">{blog?.date}</p>
                  </div>
                  <p className="text-[24px] font-semibold  my-12 leading-8  w-3/4 lg:w-full">{blog?.description}</p>
                 
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

Blog.propTypes = {};

export default Blog;
