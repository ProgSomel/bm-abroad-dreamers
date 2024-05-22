
const Card = () => {
  const cards = [
    {
      image: "https://cdn.sanity.io/images/s37229yn/production/124c56b0d98832ef6d3f854e02cf480b70254041-448x449.webp?w=448&auto=format",
      title: "VISA PROCESS",
      paragraph:
        "We assist students in navigating the complex visa application process for their chosen study abroad",
    },
    {
      image: "https://cdn.sanity.io/images/s37229yn/production/d54a732b46f7f381de5f28a9c70a07494a70fdbf-2000x1615.webp?w=640&auto=format",
      title: "UNIVERSITY SELECTION",
      paragraph:
        "We help students find the perfect university that aligns with their academic goals and preferences",
    },
    {
      image: "https://cdn.sanity.io/images/s37229yn/production/e173064a841e5451c80462cbda7535e1b5899fae-1841x1886.png?w=640&auto=format",
      title: "INITIAL CONSULTATION",
      paragraph:
        "Our team provides best personalized guidance to help students understand their opportunities",
    },
    {
      image: "https://cdn.sanity.io/images/s37229yn/production/03597796ab319a4cd87b3f818b9b73af81e5d238-2000x3010.webp?w=640&auto=format",
      title: "ADMISSION GUIDANCE",
      paragraph:
        "We offer expert advice to ensure students submit strong applications to their desired universities.",
    },
    {
      image: "https://cdn.sanity.io/images/s37229yn/production/f9a232f020cdbef00a4c037d6874c3b562250bce-1995x2761.png?w=640&auto=format",
      title: "CAREER COUNSELING",
      paragraph:
        "We provide students understand how their chosen study program can can lead to their future career goals",
    },
    {
      image: "https://cdn.sanity.io/images/s37229yn/production/8e9a01894b2d5b65c165f2e48935ea6cae88e4bd-2000x2186.webp?w=640&auto=format",
      title: "EDUCATION COUNSELING",
      paragraph:
        "Our experienced counselors offer guidance on various study programs and help students make decisions",
    },
    {
      image: "https://cdn.sanity.io/images/s37229yn/production/bfa27d15dde0c8633aa23de6cbe9c7db0595133f-2000x1656.webp?w=640&auto=format",
      title: "APPLICATION PLACEMENT",
      paragraph:
        "We assist students in submitting their applications to universities with all necessary documents",
    },
    {
      image: "https://cdn.sanity.io/images/s37229yn/production/93d1e3120b3dde27f3a7ea15214ee19f15b5f476-2000x1469.webp?w=640&auto=format",
      title: "EXPERT VISA SERVICES",
      paragraph:
        "Our team of experts guides students through the visa application process, minimizing the chances of rejection.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
      {cards?.map((card, idx) => (
        <div
          key={idx}
          className="group h-[470px] bg-white shadow-xl py-[29px] rounded-[24px] hover:text-white hover:bg-indigo-500 transition-colors duration-300"
        >
          <figure className="px-10 pt-10 flex justify-center mb-3">
            <img
              src={card?.image}
              className="rounded-xl h-[170px] transform transition-transform duration-300 group-hover:scale-110"
              alt={card?.title}
            />
          </figure>
          <div className="card-body items-center w-full text-center">
            <h2 className="w-full text-[25px] font-bold whitespace-nowrap overflow-hidden font-oswald">
              {card?.title}
            </h2>
            <p className="mt-1 font-poppins">{card?.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
