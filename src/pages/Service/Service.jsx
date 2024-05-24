/* eslint-disable react/no-unescaped-entities */
import "./Service.css";

const Service = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Banner Section */}
      <div className="pt-8 lg:pt-32 px-8 lg:px-0">
        <div className="pt-24">
          <h1 className="text-[30px] lg:text-[63.5px] font-bold font-oswald text-center w-full mb-8 lg:mb-0">
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
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 lg:relative p-5 lg:p-0 mt-8 lg:mt-16"> {/* Adjusted margin */}
        <img
          className="col-span-2 lg:col-span-1 w-full h-[100px] lg:w-[483px] lg:h-[495px] rounded-[24px]"
          src="https://cdn.sanity.io/images/s37229yn/production/b7c55afc3fa808f33f69a1c838c7241379bf37bb-5438x6797.jpg?w=640&auto=format"
          alt="Gallery Image 1"
        />
        <img
          className="lg:col-span-2 w-full h-[100px] lg:w-[609px] lg:h-[322px] rounded-[24px]"
          src="https://cdn.sanity.io/images/s37229yn/production/ed36f72ceea5b3bfc3998acf46a8c0621de7f6ec-6240x4160.jpg?w=640&auto=format"
          alt="Gallery Image 2"
        />
        <img
          className="w-full h-full lg:w-[356px] lg:h-[322px] rounded-[24px]"
          src="https://cdn.sanity.io/images/s37229yn/production/cfb6041404e82fbd389ccd55eb89c58657e0de29-1200x800.jpg?w=640&auto=format"
          alt="Gallery Image 3"
        />
        <img
          className="col-span-2 lg:col-span-1 h-full lg:w-[483px] lg:h-[322px] rounded-[24px]"
          src="https://cdn.sanity.io/images/s37229yn/production/a5d7d27961f81759b7c1c2339288d37bc2078b33-992x558.jpg?w=640&auto=format"
          alt="Gallery Image 4"
        />
        <img
          className="w-full h-full lg:w-[356px] lg:h-[495px] lg:absolute lg:left-[295px] lg:top-[340px] rounded-[24px]"
          src="https://cdn.sanity.io/images/s37229yn/production/b3182143c70e9046e6a88e146e719800ae83a74c-1528x2192.png?w=640&auto=format"
          alt="Gallery Image 5"
        />
        <img
          className="col-span-2 w-full h-full lg:w-[485px] lg:h-[495px] lg:col-span-2 lg:absolute lg:left-[670px] lg:top-[340px] rounded-[24px]"
          src="https://cdn.sanity.io/images/s37229yn/production/fc1685e3d392f74430a7492fae4bab8b8e4ff9d7-6016x4016.jpg?w=640&auto=format"
          alt="Gallery Image 6"
        />
      </div>

      <div>
        <h1 className="font-poppins text-[32px] w-3/4 mx-auto text-center mt-5 lg:mt-16">
          We offer a diverse range of services to cater to your aspirations. Whether you're planning to study abroad or embark on a memorable tourism adventure, we've got you covered.
        </h1>
      </div>
    </div>
  );
};

Service.propTypes = {};

export default Service;
