import { MdKeyboardArrowRight } from "react-icons/md";

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
  return (
    <div>
      <div className="container flex">
        {/* left */}
        <div className="w-[20%] pr-4 pt-10 border-r-[1px] border-borderColor">
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
        <div className="w-[80%]">d</div>
      </div>
    </div>
  );
};

export default Hero;
