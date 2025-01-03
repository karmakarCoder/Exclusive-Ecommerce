import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import qrcode from "../../assets/Qrcode.png";
import playstore from "../../assets/play-app-store.png";
import appstore from "../../assets/appstore.png";
import { Img } from "react-image";
import { RiFacebookLine } from "react-icons/ri";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";
import { MdKeyboardArrowRight, MdOutlineCancel } from "react-icons/md";
import { TiStarOutline } from "react-icons/ti";
import { HiOutlineLogin } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [open, setopen] = useState(false);
  const [userDropDown, setuserDropDown] = useState(false);
  const [searchInput, setSearchInput] = useState(false);
  const dropdownRef = useRef(null);
  const list = ["Home", "Contact", "About", "Sign Up"];
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

  const HandleMobileSearchInput = () => {
    setopen(false);
    setSearchInput(true);
  };

  const HandleMenuOpen = () => {
    setopen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const HandleUser = () => {};

  useEffect(() => {
    window.addEventListener("click", (event) => {
      if (dropdownRef.current.contains(event.target)) {
        setuserDropDown(!userDropDown);
      } else {
        setuserDropDown(false);
      }
    });
  }, [userDropDown]);

  return (
    <>
      {/* header */}
      <div className="bg-primary_black py-[15px]">
        <div className="container">
          <div className="font-poppins flex justify-end items-center font-normal text-xs lg:text-sm text-text">
            <p className="mx-auto leading-4">
              Summer Sale For All Swim Suits And Free Express Delivery -{" "}
              <span className="bg-yellow-400 md:bg-transparent text-primary_black md:text-primary_white">
                OFF 50%!
              </span>
            </p>
            {/* language */}
            <select name="" id="" className="capitalize pr-1 bg-transparent">
              <option value="">English</option>
            </select>
          </div>
        </div>
      </div>

      {/* nav */}
      <div className="lg:py-5 py-3 border-b-[1px] border-b-borderColor">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* logo */}
            <div>
              <Link to={"/"} className="font-bold text-xl lg:text-2xl">
                Exclusive
              </Link>
            </div>
            {/* navlist */}
            <ul className="md:flex hidden capitalize font-poppins font-normal lg:text-base text-sm items-center gap-10">
              {list?.map((item, index) => (
                <li
                  key={index}
                  className="relative after:absolute after:w-full after:h-[2px] after:bg-[#00000065] after:left-0 after:-bottom-1"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
            {/* search & wishlist & cart */}
            <div className="flex items-center gap-3 lg:gap-6">
              {/* search */}
              <div className="w-[250px] sm:block md:hidden lg:block hidden relative rounded-[4px] overflow-hidden">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="py-[7px] bg-secondary placeholder:font-poppins font-poppins font-normal text-sm w-full placeholder:font-normal placeholder:text-xs pl-4 pr-10"
                />
                {/* search icon */}
                <div className="text-lg absolute top-[50%] -translate-y-[50%] right-4">
                  <FiSearch />
                </div>
              </div>
              {/* search icon for mobile*/}
              <div
                onClick={HandleMobileSearchInput}
                className="text-2xl sm:hidden md:block lg:hidden block cursor-pointer"
              >
                <FiSearch />
              </div>
              {/* ovarlay */}
              {searchInput && (
                <div
                  onClick={() => setSearchInput(false)}
                  className="w-full h-full z-40 sm:hidden md:block bg-[#00000088] lg:hidden fixed top-0 left-0"
                ></div>
              )}

              {/* search bar for mobile */}
              {searchInput && (
                <div className="fixed sm:hidden md:block lg:hidden z-50 top-0 left-0 w-full">
                  <div className="w-full relative">
                    <input
                      type="text"
                      placeholder="What are you looking for?"
                      className="py-3 bg-secondary placeholder:font-poppins font-poppins font-normal text-sm w-full placeholder:font-normal placeholder:text-xs pl-4 pr-10"
                    />
                    {/* search icon */}
                    <div className="text-lg cursor-pointer absolute top-[50%] -translate-y-[50%] right-4">
                      <FiSearch />
                    </div>
                  </div>
                </div>
              )}

              {/* wishlist */}
              <div className="text-2xl cursor-pointer">
                <IoMdHeartEmpty />
              </div>
              {/* cart */}
              <div className="relative">
                <div className="text-2xl cursor-pointer">
                  <IoCartOutline />
                </div>
                <div className="size-4 absolute top-[-5px] right-[-5px] bg-secondary2 rounded-full flex items-center justify-center font-poppins font-normal text-xs text-primary_white">
                  <p>2</p>
                </div>
              </div>

              {/* user */}
              <div className="relative">
                <div className="bg-secondary2 size-6 sm:size-8 rounded-full flex items-center justify-center text-primary_white">
                  <div
                    ref={dropdownRef}
                    onClick={HandleUser}
                    className="sm:text-[22px] text-base cursor-pointer"
                  >
                    <FiUser />
                  </div>
                </div>

                {/* user dropdown */}
                {userDropDown && (
                  <div className="bg-[#00000063] w-[225px] absolute top-[37px] sm:right-0 right-[-52px] z-40 font-poppins text-sm font-normal text-text rounded backdrop-blur-md">
                    <div className="flex px-3 capitalize items-center gap-2 cursor-pointer py-3 hover:bg-[#ffffff10]">
                      <FiUser className="text-xl" />
                      <p>Manage My Account</p>
                    </div>
                    <div className="flex px-3 capitalize items-center gap-2 cursor-pointer py-3 hover:bg-[#ffffff10]">
                      <LuShoppingBag className="text-xl" />
                      <p>My Order</p>
                    </div>
                    <div className="flex px-3 capitalize items-center gap-2 cursor-pointer py-3 hover:bg-[#ffffff10]">
                      <MdOutlineCancel className="text-xl" />
                      <p>My Cancellations</p>
                    </div>
                    <div className="flex px-3 capitalize items-center gap-2 cursor-pointer py-3 hover:bg-[#ffffff10]">
                      <TiStarOutline className="text-xl" />
                      <p>My Reviews</p>
                    </div>
                    <div className="flex px-3 capitalize items-center gap-2 cursor-pointer py-3 hover:bg-[#ffffff10]">
                      <HiOutlineLogin className="text-xl" />
                      <p>Logout</p>
                    </div>
                  </div>
                )}
              </div>

              {/* menu bar */}
              <div
                onClick={HandleMenuOpen}
                className="text-2xl cursor-pointer lg:hidden"
              >
                {open ? <RxCross2 /> : <HiOutlineBars3CenterLeft />}
              </div>
            </div>
          </div>

          {/* navlist for mobile */}
          {open && (
            <div className="fixed z-[999] sm:gap-x-10 sm:flex flex-wrap overflow-y-auto sm:top-[108px] pl-4 top-[115px] pt-6 left-0 w-full h-full bg-primary_white">
              <div className="md:hidden">
                <p className="font-poppins font-semibold text-lg capitalize text-primary_black mb-5">
                  important links
                </p>
                <ul className="flex flex-col capitalize font-poppins font-normal lg:text-base text-sm items-start gap-5">
                  {list?.map((item, index) => (
                    <li
                      key={index}
                      className="relative hover:text-primary_black hover:font-semibold after:absolute after:w-full after:h-[2px] after:bg-[#00000065] after:left-0 after:-bottom-1"
                    >
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sm:w-[189px] sm:min-h-[550px]">
                <p className="font-poppins font-semibold text-lg capitalize text-primary_black mb-5 mt-7 sm:mt-0">
                  categories
                </p>
                <ul className="flex flex-col font-poppins font-normal text-sm text-primary_black">
                  {category.map((item, index) => (
                    <div
                      key={index}
                      className="inline-flex py-2 cursor-pointer group items-center"
                    >
                      <li className="group-hover:font-semibold block transition">
                        {item.category}
                      </li>
                      {item.subcategory && (
                        <MdKeyboardArrowRight className="text-2xl group-hover:translate-x-1 group-hover:opacity-85 transition opacity-55" />
                      )}
                    </div>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-start justify-start sm:mt-0 mt-10 text-2xl gap-4">
                  <a href="#">
                    <RiFacebookLine />
                  </a>
                  <a href="#">
                    <TfiTwitter />
                  </a>
                  <a href="#">
                    <FaInstagram />
                  </a>
                  <a href="#">
                    <RiLinkedinLine />
                  </a>
                </div>
                <div className="flex h-[50%] sm:w-auto flex-col mt-6 items-start justify-start">
                  {" "}
                  <h5 className="font-poppins font-medium text-lg">
                    Download App
                  </h5>
                  <p className="text-xs font-normal pt-1 font-poppins">
                    Save $3 with App New User Only
                  </p>
                  <div className="flex items-center mt-3 gap-2">
                    <div>
                      <Img src={qrcode} alt="qrcode" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <Img
                        src={appstore}
                        alt="appstore"
                        className="cursor-pointer"
                      />
                      <Img
                        src={playstore}
                        alt="playstore"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
