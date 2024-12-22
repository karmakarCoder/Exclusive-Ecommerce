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
import { useEffect, useState } from "react";

const Header = () => {
  const [open, setopen] = useState(false);
  const [searchInput, setSearchInput] = useState(false);
  const list = ["Home", "Contact", "About", "Sign Up"];

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
                  className="w-full h-full z-40 bg-[#00000088] fixed top-0 left-0"
                ></div>
              )}

              {/* search bar for mobile */}
              {searchInput && (
                <div className="fixed z-50 md:top-[102px] top-[115px] left-0 w-full">
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
              <div className="text-2xl cursor-pointer">
                <IoCartOutline />
              </div>
              {/* menu bar */}
              <div
                onClick={HandleMenuOpen}
                className="text-2xl cursor-pointer md:hidden"
              >
                {open ? <RxCross2 /> : <HiOutlineBars3CenterLeft />}
              </div>
            </div>
          </div>

          {/* navlist for mobile */}
          {open && (
            <div className="fixed z-[999] sm:flex-row sm:justify-center sm:gap-8 sm:flex md:block sm:top-[108px] top-[115px] pt-6 left-0 w-full h-full bg-primary_white">
              <ul className="flex flex-col capitalize font-poppins font-normal lg:text-base text-sm items-center gap-5">
                {list?.map((item, index) => (
                  <li
                    key={index}
                    className="relative after:absolute after:w-full after:h-[2px] after:bg-[#00000065] after:left-0 after:-bottom-1"
                  >
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center sm:items-start sm:justify-start sm:mt-0 mt-10 justify-center text-2xl gap-4">
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
              <div className="flex flex-col items-center sm:justify-start justify-center mt-10 sm:mt-0">
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
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
