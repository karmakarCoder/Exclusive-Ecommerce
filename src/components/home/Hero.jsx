import { MdKeyboardArrowRight } from "react-icons/md";
import banner1 from "../../assets/banner.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  const category = [
    {
      category: "Woman’s Fashion",
      subcategory: false,
    },
    {
      category: "Men’s Fashion",
      subcategory: true,
    },
    {
      category: "Electronics",
      subcategory: false,
    },
    {
      category: "Home & Lifestyle",
      subcategory: false,
    },
    {
      category: "Medicine",
      subcategory: false,
    },
    {
      category: "Sports & Outdoor",
      subcategory: true,
    },
    {
      category: "Baby’s & Toys",
      subcategory: false,
    },
    {
      category: "Baby’s & Toys",
      subcategory: true,
    },
    {
      category: "Groceries & Pets",
      subcategory: true,
    },
    {
      category: "Health & Beauty",
      subcategory: false,
    },
  ];

  const slider = [
    {
      img: banner1,
      link: "",
    },
    {
      img: "https://img.pikbest.com/origin/10/01/82/867pIkbEsTAIq.png!w700wp",
      link: "",
    },
    {
      img: banner1,
      link: "",
    },
    {
      img: banner1,
      link: "",
    },
    {
      img: banner1,
      link: "",
    },
  ];
  return (
    <div className="pb-10">
      <div className="container flex">
        {/* left */}
        <div className="hidden lg:block w-[20%] pr-4 pt-10 border-r-[1px] border-borderColor">
          <ul className="flex flex-col font-poppins font-normal text-base text-primary_black">
            {category.map((item, index) => (
              <div
                key={index}
                className="flex py-3 cursor-pointer group items-center justify-between"
              >
                <li className="group-hover:font-semibold transition">
                  {item.category}
                </li>
                {item.subcategory && (
                  <MdKeyboardArrowRight className="text-2xl group-hover:translate-x-1 group-hover:opacity-85 transition opacity-55" />
                )}
              </div>
            ))}
          </ul>
        </div>
        {/* right */}
        <div className="lg:w-[80%] w-full lg:pl-10 pt-7 lg:pt-[52px]">
          <div>
            <Swiper
              autoplay={{
                delay: 2500,
              }}
              pagination={true}
              modules={[Pagination, Autoplay]}
              className="bannerSwiper"
            >
              {slider?.map((item, index) => (
                <SwiperSlide key={index} className="w-full h-full">
                  <img
                    src={item.img}
                    alt={item.img}
                    className="w-full h-[170px]  sm:h-[250px] lg:h-[300px] xl:h-[400px] object-fill"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
