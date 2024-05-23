const Footer = () => {
  return (
    <div>
      <footer className="bg-white bg-[$fff]">
        <div className="container p-6 mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <a href="#">
                  <img
                    className="w-auto h-20"
                    src="https://cdn.sanity.io/images/s37229yn/production/576084e1b9545990e38bc6ccee63646f2b0b0742-756x276.png?w=320&auto=format"
                    alt=""
                  />
                </a>

                <p className="max-w-sm mt-2  font-poppins text-[14px]">
                  We help students achieve their dreams of studying abroad by
                  providing them with the best resources and support. Your
                  journey to global education starts with us.
                </p>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    About
                  </h3>

                  <a
                    href="#"
                    className="block mt-2 font-poppinsn text-[#0a142f] text-[14px] "
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="block mt-2 font-poppinsn text-[#0a142f] text-[14px] "
                  >
                    Priavcy Policy
                  </a>
                  <a
                    href="#"
                    className="block mt-2 font-poppinsn text-[#0a142f] text-[14px] "
                  >
                    Our Partner
                  </a>
                  <a
                    href="#"
                    className="block mt-2 font-poppinsn text-[#0a142f] text-[14px] "
                  >
                    Blog
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase dark:text-white">
                    Blog
                  </h3>
                  <a
                    href="#"
                    className="block mt-2 font-poppinsn text-[#0a142f] text-[14px] "
                  >
                    Contact Us
                  </a>
                  <a
                    href="#"
                    className="block mt-2 font-poppinsn text-[#0a142f] text-[14px] "
                  >
                    Terms and <br />
                    conditions
                  </a>
                  <a
                    href="#"
                    className="block mt-2 font-poppinsn text-[#0a142f] text-[14px] "
                  >
                    Tourist Hub
                  </a>
                  <a
                    href="#"
                    className="block mt-2 font-poppinsn text-[#0a142f] text-[14px] "
                  >
                    Services
                  </a>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://www.bmabroaddreamers.com/icons/mobile.svg"
                      alt=""
                    />
                    017 4482 7595
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src="https://www.bmabroaddreamers.com/icons/mail.svg"
                      alt=""
                    />
                    House 983, Road 16, Avenue 2, Mirpur DOHS, Dhaka 1216,
                    Bangladesh
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://www.bmabroaddreamers.com/icons/location.svg"
                      alt=""
                    />
                    bmabroadreamers@gmail.com
                  </div>
                </div>

                <div className="lg:mt-[150px] lg:ml-[80px]">
                  <h1 className="font-poppins font-light text-nowrap">
                    Social Media
                  </h1>
                  <div className="flex gap-3 mt-2">
                    <img
                      className="w-4"
                      src="https://cdn.sanity.io/images/s37229yn/production/013e14ec8b1d0e1e64d7db227886e11ad55cec1d-24x24.svg?w=24&auto=format"
                      alt=""
                    />

                    <img
                      className="w-4"
                      src="https://cdn.sanity.io/images/s37229yn/production/00b80c390f7d8ce803afc0a923cb4b18c7b0c2c1-24x24.svg?w=24&auto=format"
                      alt=""
                    />

                    <img
                      className="w-4"
                      src="https://cdn.sanity.io/images/s37229yn/production/bd8c73562593d683c67900ae97ee6db2cb2111ee-24x24.svg?w=24&auto=format"
                      alt=""
                    />

                    <img
                      className="w-4"
                      src="https://cdn.sanity.io/images/s37229yn/production/96b3b1e20033706537a9ea37999d2a98e5a35b2b-24x24.svg?w=24&auto=format"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1b1464] p-5">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className=" text-white font-poppins  ">
              Copyright © 2024 •{" "}
              <span className="font-bold">BM ABROAD DREAMERS</span>
            </p>
            <p className="text-white font-poppins mt-4 lg:mt-0">
              Developed by <span className="font-bold">EDISTYS</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
