
import About from "../About/About";
import Card from "../Card/Card";
import Carousel from "../Carousel";
import VideoBackGround from "../VideoBackground/VideoBackGround";

import TopDestination from "../TopDestination/TopDestination";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
   
  return (
    <div>
      <Carousel></Carousel>
      {/* Step Into Section  */}
      <div className="">
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
            className="h-[200px]"
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

    </div>
  );
};

export default Home;
