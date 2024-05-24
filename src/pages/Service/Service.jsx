/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import "./Service.css";
import Aos from "aos";

const Service = () => {
  useEffect(() => {
    Aos.init({
      duration: 300, // global duration of animations
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Banner Section */}
      <div className="pt-8 lg:pt-32 px-8 lg:px-0">
        <div className="pt-24">
          <h1
            c
            className="text-[30px] lg:text-[63.5px] font-bold font-oswald text-center w-full mb-8 lg:mb-0"
          >
            EXPLORE THE WORLD WITH
            <span className="flex flex-col xl:flex-row justify-center gap-4">
              <span className="flex flex-col items-center gap-0 text-indigo-700">
                BM ABROAD DREAMERS
                <img
                  className="w-[400px]"
                  src="https://www.bmabroaddreamers.com/lines.png"
                  alt="BM Abroad Dreamers"
                />
              </span>
            </span>
          </h1>
        </div>

        {/* Floating Images Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-12 lg:space-y-0">
          <img
            className="w-[200px] floating"
            src="https://cdn.sanity.io/images/s37229yn/production/01349a1b350495592271b7c76558a8e2eeb6a9c6-594x351.png?w=594&auto=format"
            alt="Image 1"
          />
          <img
            className="w-[200px] floating"
            src="https://cdn.sanity.io/images/s37229yn/production/a472c82b4b2f047477f4d971256cff8eaf32c630-595x522.png?w=595&auto=format"
            alt="Image 2"
          />
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 lg:relative p-5 lg:p-0 mt-8 lg:mt-16">
        {" "}
        {/* Adjusted margin */}
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          className="col-span-2 lg:col-span-1 w-full h-[100px] lg:w-[483px] lg:h-[495px] rounded-[24px]"
          src="https://cdn.sanity.io/images/s37229yn/production/b7c55afc3fa808f33f69a1c838c7241379bf37bb-5438x6797.jpg?w=640&auto=format"
          alt="Gallery Image 1"
        />
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          className="lg:col-span-2 w-full h-[100px] lg:w-[609px] lg:h-[322px] rounded-[24px]"
          src="https://cdn.sanity.io/images/s37229yn/production/ed36f72ceea5b3bfc3998acf46a8c0621de7f6ec-6240x4160.jpg?w=640&auto=format"
          alt="Gallery Image 2"
        />
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full h-full lg:w-[356px] lg:h-[322px] rounded-[24px]"
          src="https://cdn.sanity.io/images/s37229yn/production/cfb6041404e82fbd389ccd55eb89c58657e0de29-1200x800.jpg?w=640&auto=format"
          alt="Gallery Image 3"
        />
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          className="col-span-2 lg:col-span-1 h-full lg:w-[483px] lg:h-[322px] rounded-[24px]"
          src="https://cdn.sanity.io/images/s37229yn/production/a5d7d27961f81759b7c1c2339288d37bc2078b33-992x558.jpg?w=640&auto=format"
          alt="Gallery Image 4"
        />
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full h-full lg:w-[356px] lg:h-[495px] lg:absolute lg:left-[295px] lg:top-[340px] rounded-[24px]"
          src="https://cdn.sanity.io/images/s37229yn/production/b3182143c70e9046e6a88e146e719800ae83a74c-1528x2192.png?w=640&auto=format"
          alt="Gallery Image 5"
        />
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          className="col-span-2 w-full h-full lg:w-[485px] lg:h-[495px] lg:col-span-2 lg:absolute lg:left-[670px] lg:top-[340px] rounded-[24px]"
          src="https://cdn.sanity.io/images/s37229yn/production/fc1685e3d392f74430a7492fae4bab8b8e4ff9d7-6016x4016.jpg?w=640&auto=format"
          alt="Gallery Image 6"
        />
      </div>

      <div>
        <h1 className="font-poppins text-[32px] w-3/4 mx-auto text-center mt-5 lg:mt-16">
          We offer a diverse range of services to cater to your aspirations.
          Whether you're planning to study abroad or embark on a memorable
          tourism adventure, we've got you covered.
        </h1>
      </div>

      {/* Study Abroad Services  */}
      <div className="mt-24 px-8 lg:px-0">
        <div className="border-indigo-500 border-l-[10px]">
          <div className="ml-4">
            <h1 className="text-[30px] md:text-[64px] font-bold font-oswald">
              STUDY ABROAD SERVICES
            </h1>
            <p className="font-poppins font-extralight">
              we're dedicated to making your study abroad journey seamless and
              successful
            </p>
          </div>
        </div>

        <div className="p-3 lg:p-20 flex flex-col-reverse lg:flex-row items-center gap-20">
            <div className="space-y-8 lg:w-1/2">
               <div>
               <div className="flex items-center gap-3">
                <img src="https://cdn.sanity.io/images/s37229yn/production/9786e04fe1b55ccb4869391e04d88287abd506df-34x34.svg?w=34&auto=format" alt="" />
                <p className="text-[#290886] font-poppins text-[24px]">Prioritizing Your Voice:</p>
                </div>
                <p className="font-poppins text-[14px] mt-2">We believe in listening first. Your background, dreams, and goals matter, and they shape the foundation of our approach.</p>
               </div>
               <div>
               <div className="flex items-center gap-3">
                <img src="https://cdn.sanity.io/images/s37229yn/production/a55f7490a634dd7e5bb42fcd29977a440a6397c1-30x30.svg?w=30&auto=format" alt="" />
                <p className="text-[#290886] font-poppins text-[24px]">Custom Pathway Design:</p>
                </div>
                <p className="font-poppins text-[14px] mt-2">Your journey is unique, and we recognize that. We work closely with you to create a customized pathway tailored to your specific needs.</p>
               </div>
               <div>
               <div className="flex items-center gap-3">
                <img src="https://cdn.sanity.io/images/s37229yn/production/8e083e29b0c7662d69d112ea3a355da9a4a135ce-26x26.svg?w=26&auto=format" alt="" />
                <p className="text-[#290886] font-poppins text-[24px]">Recognition in the Job Market:</p>
                </div>
                <p className="font-poppins text-[14px] mt-2">We equip you with the skills and guidance you need to excel in the job market, ensuring you stand out to prospective employers.</p>
               </div>
               <div>
               <div className="flex items-center gap-3">
                <img src="https://cdn.sanity.io/images/s37229yn/production/29d0dfa7a74628d125d81f034d4511637f8a0f4f-30x30.svg?w=30&auto=format" alt="" />
                <p className="text-[#290886] font-poppins text-[24px]">Pathway to Residence:</p>
                </div>
                <p className="font-poppins text-[14px] mt-2">For those with dreams of permanent residence, we provide guidance on how your study journey can lead to residency in your dream destination.</p>
               </div>
            </div>

            {/* image  */}
            <div className="lg:w-1/2 mt-12 lg:mt-0">
                <img className="w-full h-[full] lg:w-[665px] lg:h-[480px] rounded-[24px]" src="https://cdn.sanity.io/images/s37229yn/production/ce7648f8dad9f6f9fdb04d812ac5c92b766d33c8-5513x4339.jpg?w=960&auto=format" alt="" />
            </div>
        </div>

      </div>

    {/* Second banner  */}
    <div className="px-8 lg-px-0 py-5">
        <img className="rounded-[24px]" src="https://cdn.sanity.io/images/s37229yn/production/1fd4512c14cbc1d3f3245f4296f1676ed45f2841-6400x3624.png?w=1920&auto=format" alt="" />
    </div>


     {/* Study Abroad Services Tourism Services */}
     <div className="mt-24 px-8 lg:px-0">
        <div className="border-indigo-500 border-l-[10px]">
          <div className="ml-4">
            <h1 className="text-[30px] md:text-[64px] font-bold font-oswald">
            TOURISM SERVICES
            </h1>
            <p className="font-poppins font-extralight">
            we're also your gateway to unforgettable tourism experiences.
            </p>
          </div>
        </div>

        <div className="p-3 lg:p-20 flex flex-col-reverse lg:flex-row items-center gap-20">
            <div className="space-y-8 lg:w-1/2">
               <div>
               <div className="flex items-center gap-3">
                <img className="w-[30px] h-[30px]" src="https://cdn.sanity.io/images/s37229yn/production/fa9c4fc39cf1a787324cee0181cdf2d5251dd02a-60x35.png?w=60&auto=format" alt="" />
                <p className="text-[#290886] font-poppins text-[24px]">Air Ticket Booking:</p>
                </div>
                <p className="font-poppins text-[14px] mt-2">Take the stress out of travel planning with our expert air ticket booking services. We'll find the best flight options that suit your preferences and budget.</p>
               </div>
               <div>
               <div className="flex items-center gap-3">
                <img className="w-[30px] h-[30px]" src="https://cdn.sanity.io/images/s37229yn/production/9acb2763d675de73c57a150d0189636a3bf8b294-60x60.png?w=60&auto=format" alt="" />
                <p className="text-[#290886] font-poppins text-[24px]">Customized Tour Packages:</p>
                </div>
                <p className="font-poppins text-[14px] mt-2">Your travel experience should be as unique as you are. That's why we offer customized tour packages tailored to your interests and desires.</p>
               </div>
               <div>
               <div className="flex items-center gap-3">
                <img className="w-[30px] h-[30px]" src="https://cdn.sanity.io/images/s37229yn/production/a94e0841d982b47887826ea2006419b48900abe4-60x60.png?w=60&auto=format" alt="" />
                <p className="text-[#290886] font-poppins text-[24px]">Effortless Exploration:</p>
                </div>
                <p className="font-poppins text-[14px] mt-2">Leave the logistics to us. We take care of the details, so you can focus on creating incredible memories.</p>
               </div>
               <div>
               <div className="flex items-center gap-3">
                <img className="w-[30px] h-[30px]" src="https://cdn.sanity.io/images/s37229yn/production/29d0dfa7a74628d125d81f034d4511637f8a0f4f-30x30.svg?w=30&auto=format" alt="" />
                <p className="text-[#290886] font-poppins text-[24px]">Pathway to Residence:</p>
                </div>
                <p className="font-poppins text-[14px] mt-2">For those with dreams of permanent residence, we provide guidance on how your study journey can lead to residency in your dream destination.</p>
               </div>
            </div>

            {/* image  */}
            <div className="lg:w-1/2 mt-12 lg:mt-0">
                <img className="w-full h-[full] lg:w-[665px] lg:h-[480px] rounded-[24px]" src="https://cdn.sanity.io/images/s37229yn/production/9c974cba5febec27db89085285c7727ecc52d496-5999x3999.jpg?w=960&auto=format" alt="" />
            </div>
        </div>

      </div>

      {/* second Photo Gallery  */}
      <div className="grid grid-cols-3 md:col-span-4 lg:grid-cols-4 gap-5 lg:relative lg:mb-[400px] px-8 lg:px-0">
        <img className="col-span-2 md:w-[600px] lg:col-span-2 w-[350px]  h-[100px] lg:w-[609px] lg:h-[322px]" src="https://cdn.sanity.io/images/s37229yn/production/0b7e97dcf2b39496a8fc92b1339d36979c08a5b6-2616x1740.png?w=640&auto=format" alt="" />
        <img className="w-[350px] h-[100px] lg:h-[322px]" src="https://cdn.sanity.io/images/s37229yn/production/cfe3f86b89fcc585e308beeef2835af255939e99-1528x1740.png?w=640&auto=format" alt="" />
        <img className="w-[400px] h-[100px] lg:h-[422px] " src="https://cdn.sanity.io/images/s37229yn/production/806bdf46ec50c37475ab24c7752dce3cb9023eb1-2068x2636.png?w=640&auto=format" alt="" />
        <img  className="h-[100px] w-[300px] md:w-[510px] lg:w-[356px] lg:h-[320px]
        lg:absolute lg:top-[350px]
        col-span-2 lg:col-span-1
        " src="https://cdn.sanity.io/images/s37229yn/production/b3182143c70e9046e6a88e146e719800ae83a74c-1528x2192.png?w=640&auto=format" alt="" />
        <img className=" h-[150px] w-[200px] md:w-[400px] lg:w-[480px] lg:h-[320px] md:h-[100px] 
        lg:absolute lg:left-[380px] lg:top-[345px]
        " src="https://cdn.sanity.io/images/s37229yn/production/b6f7e06c32a02a2139486098acdfc7a1cbf21da6-2612x2192.png?w=640&auto=format" alt="" />
        <img className="w-[300px] md:w-[510px] lg:w-[270px] h-[100px] lg:h-[222px]  
        col-span-2 lg:col-span-1
        lg:absolute lg:left-[880px] lg:top-[440px]
        " src="https://cdn.sanity.io/images/s37229yn/production/c41825524a985529bc281c027c982ba980bd23b6-2068x1308.png?w=640&auto=format" alt="" />
      </div>

    </div>
  );
};

Service.propTypes = {};

export default Service;
