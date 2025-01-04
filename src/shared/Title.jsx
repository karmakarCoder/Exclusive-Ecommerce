import React from "react";

const Title = ({ mainTitle, subtitle }) => {
  return (
    <div>
      <div className="flex items-center gap-x-2 xl:gap-x-3 mb-2 xl:mb-6">
        <div className="bg-secondary2 xl:w-5 w-1 h-6 xl:h-10  xl:rounded-md"></div>
        <p className="text-secondary2 font-poppins font-semibold text-sm xl:text-base capitalize">
          {subtitle ? subtitle : "Today’s"}
        </p>
      </div>
      <h3 className="font-semibold capitalize text-xl xl:text-4xl font-inter text-primary_black">
        {mainTitle ? mainTitle : "Flash Sales"}
      </h3>
    </div>
  );
};

export default Title;
