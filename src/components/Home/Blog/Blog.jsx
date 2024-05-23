import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

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
    <div className="mt-16 lg:mt-24">
      <div className="border-indigo-500 border-l-[10px]">
        <div className="ml-4">
          <h1 className="text-[30px] md:text-[64px] font-bold font-oswald">
            BLOGS
          </h1>
          <p className="font-poppins font-extralight">
            Explore our latest blogs and articles
          </p>
        </div>
      </div>

      {/* Blog Card */}
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay, Pagination]}

          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide className="mt-12"  key={index}>
              <div className="card card-compact w-96 ">
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
                  <p className="text-[24px] font-semibold font- my-12 leading-8">{blog?.description}</p>
                 
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Blog;
