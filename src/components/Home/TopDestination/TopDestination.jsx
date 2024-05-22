// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'animate.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";

const TopDestination = () => {
  const destinations = [
    {
      image: "https://cdn.sanity.io/images/s37229yn/production/8a927441826e5946a3f7c5a5ec21602728c387f4-2756x4164.jpg?w=640&auto=format",
      title: "NEW ZEALAND",
      description: "Studying in New Zealand offers a unique blend of high-quality education and breathtaking natural beauty. With its diverse courses, New Zealand provides an enriching experience for international students."
    },
    {
      image: "https://cdn.sanity.io/images/s37229yn/production/ae9f1d1675c36f23df197fdbcd6ed7eee09baf84-1528x2048.png?w=640&auto=format",
      title: "AUSTRALIA",
      description: "Australia is renowned for its world-class education system and a diverse, multicultural society. With a wide range of programs and courses, it provides an enriching experience for international students."
    },
    {
      image: "https://cdn.sanity.io/images/s37229yn/production/d47d9d87e83105147c61af3f3478b16196d7888a-1528x2048.png?w=640&auto=format",
      title: "USA",
      description: "The United States is a global educational hub, known for its top-ranking universities and colleges. Studying in the USA not only provides access to high-quality education but also a chance to immerse yourself in a culturally diverse environment."
    },
    {
      image: "https://cdn.sanity.io/images/s37229yn/production/493d2e0fe94d96142a900468faa95e6330367100-1528x2048.png?w=640&auto=format",
      title: "CANADA",
      description: "Canada is celebrated for its excellent education system and welcoming, inclusive society. International students in Canada can enjoy a range of courses and programs, fostering personal and academic growth."
    }
  ];

  const [hoveredSlide, setHoveredSlide] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredSlide(index);
  };

  const handleMouseLeave = () => {
    setHoveredSlide(null);
  };

  return (
    <div>
      <div className="border-indigo-500 border-l-[10px]">
        <div className="ml-4">
          <h1 className="text-[30px] md:text-[64px] font-bold font-oswald">
            TOP DESTINATION
          </h1>
          <p className="font-poppins font-extralight">
            Study in your Dream Destination
          </p>
        </div>
      </div>

      {/* Slide */}
      <div className="my-12">
        <Swiper
          slidesPerView={1} // default to 1 slide per view
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
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
          {destinations.map((destination, index) => (
            <SwiperSlide key={index}>
              <div
                className={`hero h-[512px] rounded-[24px]`}
                style={{
                  backgroundImage: `url(${destination.image})`,
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`hero-overlay rounded-[24px] transition-all duration-300 ${
                  hoveredSlide === index ? "bg-indigo-700 bg-opacity-90" : ""
                }`}></div>
                <div className="text-center text-neutral-content h-full flex flex-col justify-end">
                  <div className={`max-w-md p-4 ${
                    hoveredSlide === index ? "animate__animated animate__backInUp" : ""
                  }`}>
                    {hoveredSlide === index ? (
                      <div className="">
                        <h1 className="mb-4 text-5xl font-bold font-oswald text-[40px]">{destination.title}</h1>
                        <p className="px-12 font-poppins">{destination.description}</p>
                      </div>
                    ) : (
                      <h1 className="mb-4 text-5xl font-bold absolute bottom-4 text-center left-0 right-0 font-oswald text-[40px]">{destination.title}</h1>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

TopDestination.propTypes = {};

export default TopDestination;
