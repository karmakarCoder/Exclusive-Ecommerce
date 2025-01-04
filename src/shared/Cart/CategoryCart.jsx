import React from "react";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

const CategoryCart = () => {
  return (
    <div className="lg:w-[170px] md:w-[120px] sm:w-[110px] w-[100px] h-[100px] sm:h-[110px] md:h-[120px] lg:h-[145px] active:scale-95 active:-translate-y-3 hover:bg-secondary2 transition cursor-pointer group rounded justify-center border-[1px] flex flex-col items-center sm:gap-y-3 gap-y-2 lg:gap-y-4 border-borderColor">
      <div className="sm:text-4xl text-3xl group-hover:text-primary_white text-primary_black transition">
        <HiOutlineDevicePhoneMobile />
      </div>
      <p className="font-poppins group-hover:text-primary_white transition font-normal lg:text-base text-sm capitalize text-primary_black">
        Phones
      </p>
    </div>
  );
};

export default CategoryCart;
