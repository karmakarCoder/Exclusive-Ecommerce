import React from "react";
import { FaStar } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";

const PrimaryCart = () => {
  return (
    <div className="xl:w-[270px] w-[153px] sm:w-[170px] md:w-[200px]  font-poppins">
      {/* img */}
      <div className="group overflow-hidden relative bg-secondary w-full h-[150px] sm:h-[180px] md:h-[200px] xl:h-[250px] rounded-md flex items-center justify-center">
        <img
          src="/src/assets/g92-2-500x500 1.png"
          alt="img"
          className="xl:w-[190px] w-[100px] sm:w-[120px] md:w-[130px] h-[70px] sm:h-[90px] md:h-[100px] xl:h-[180px]"
        />
        {/* discount tag */}
        <div className="absolute text-[10px] lg:text-xs xl:top-3 left-1 top-1 xl:left-3 font-normal uppercase text-primary_white bg-secondary2 py-1 xl:py-2 xl:px-3 px-2 xl:rounded-md rounded">
          -40%
        </div>
        {/* wishlist  */}
        <div className="absolute top-3 right-3 flex flex-col items-center gap-y-2">
          <div className="bg-primary_white size-6 xl:size-[34px] rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition active:scale-90 xl:text-2xl text-xl text-primary_black">
            <IoMdHeartEmpty />
          </div>
          <div className="bg-primary_white size-6 xl:size-[34px] rounded-full flex items-center justify-center cursor-pointer hover:shadow-md transition active:scale-90 xl:text-2xl text-xl text-primary_black">
            <FiEye />
          </div>
        </div>
        {/* add to cart */}
        <div className="w-full md:block hidden absolute group-hover:translate-y-0 transition translate-y-[38px] bottom-0 left-0 py-2 hover:bg-[#1f1f1f] bg-primary_black text-primary_white capitalize text-xs xl:text-sm cursor-pointer font-medium text-center">
          Add To Cart
        </div>
      </div>
      <div className="pt-4">
        <div className="flex items-center gap-x-4  mb-2">
          <h5 className="font-medium w-[200px] whitespace-nowrap text-ellipsis overflow-hidden text-sm xl:text-base text-primary_black uppercase">
            HAVIT HV-G92 Gamepad
          </h5>
          <span className="text-secondary2 text-xl cursor-pointer md:hidden">
            <FaCartPlus />
          </span>
        </div>

        <div className="font-medium text-base uppercase flex items-center gap-x-3">
          <span className="text-secondary2">$120</span>{" "}
          <span className="text-primary_black opacity-65 line-through">
            $160
          </span>
        </div>
        <div className="flex items-center mt-2 gap-x-2">
          <div className="text-[#FFAD33] flex items-center gap-x-1 text-lg xl:text-xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span className="font-semibold text-sm text-primary_black opacity-65">
            (88)
          </span>
        </div>
      </div>
    </div>
  );
};

export default PrimaryCart;
