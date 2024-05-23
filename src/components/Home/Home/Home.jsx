import About from "../About/About";
import Card from "../Card/Card";
import Carousel from "../Carousel";
import VideoBackGround from "../VideoBackground/VideoBackGround";

import TopDestination from "../TopDestination/TopDestination";
import Testimonials from "../Testimonials/Testimonials";
import Blog from "../Blog/Blog";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      {/* Step Into Section  */}
      <div className="mt-24">
        <div>
          <h1 className="text-[63.5px] font-bold font-oswald text-center w-full ">
            STEP INTO A GLOBAL EDUCATION ODYSSEY WITH
            <span className="flex flex-col xl:flex-row justify-center gap-4">
              OUR EXPERTS{" "}
              <span className="flex flex-col  items-center gap-0 text-indigo-700">
                STUDY ABROAD{" "}
                <img
                  className="w-[400px]"
                  src="https://www.bmabroaddreamers.com/lines.png"
                  alt=""
                />{" "}
              </span>
              GUIDANCE
            </span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <img
            className="w-[200px]"
            src="https://cdn.sanity.io/images/s37229yn/production/f3fa9864e1f91e3cd430c792487cb3dfa6cf6723-1236x1348.png?w=320&auto=format"
            alt=""
          />

          <img
            className="w-[200px]"
            src="https://cdn.sanity.io/images/s37229yn/production/5ea59722cab081f1ed105d2e166a30639a4b143e-5792x3600.png?w=320&auto=format"
            alt=""
          />
        </div>

        <div className="flex justify-center">
          <img
            className="h-[200px] bg-cover overflow-hidden"
            src="https://cdn.sanity.io/images/s37229yn/production/7c167e8391ffa0bc146a3e1747ea9209c669933c-3592x1440.png?rect=0,202,3592,1238&w=960&auto=format"
            alt=""
          />
        </div>
      </div>

      {/* About  */}
      <About></About>

      {/* Card  */}
      <Card></Card>

      {/* Video Background  */}
      <VideoBackGround></VideoBackGround>

      {/* Top Destination  */}
      <TopDestination></TopDestination>

      {/* Testimonial  */}
      <Testimonials></Testimonials>

      {/* Ready to Start Your Journey  */}
      <div className="bg-[#fff] rounded-[32px] p-8  lg:px-24 lg:py-16 shadow-lg">
        <div className=" lg:hidden flex justify-center">
          <h1 className="font-oswald text-[30px] md:text-[44px] font-bold mb-12 text-center ">
            EADY TO START YOUR JOURNEY TO{" "}
            <div className="flex justify-center gap-3">
              <span className="text-indigo-700 ">
                SUCCESS{" "}
                <img 
                  className="w-[100px] md:w-[160px]"
                  src="https://www.bmabroaddreamers.com/lines.png"
                  alt=""
                />
              </span>
              ?
            </div>
          </h1>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center  gap-20">
          {/* content  */}
          <div className="lg:flex-1">
          <h1 className="font-oswald text-[64px] font-bold hidden lg:block">
            EADY TO START YOUR JOURNEY TO{" "}
            <div className="flex  gap-4">
              <span className="text-indigo-700 ">
                SUCCESS{" "}
                <img
                  className="w-[230px]"
                  src="https://www.bmabroaddreamers.com/lines.png"
                  alt=""
                />
              </span>
              ?
            </div>
          </h1>
            <p className="font-poppins text-[18px]  lg:my-16">
              At BM Study Dreamers, we believe that education knows no
              boundaries and success knows no limits. With our dedicated
              guidance, your journey to success becomes a reality. With every
              step you take, we are by your side, providing expert assistance
              that transcends borders and empowers you to achieve academic
              excellence and personal dreams. Your journey to success begins
              here, with us.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-gradient-to-r mt-12 lg:mt-0 from-indigo-600 to-indigo-800 py-[13px] px-[32px] font-poppins text-white rounded-[12px] ">
                Start Now
              </button>
            </div>
          </div>
          {/* image  */}
          <div className="lg:flex-1">
            <img
              src="https://cdn.sanity.io/images/s37229yn/production/bef80116aff017c43490c98d2a35cbc776f2d774-1747x2482.png?w=960&auto=format"
              alt=""
            />
          </div>
        </div>
      </div>


    {/* Blog  */}
    <Blog></Blog>

    </div>
  );
};

export default Home;
