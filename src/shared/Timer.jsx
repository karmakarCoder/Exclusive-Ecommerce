import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(4 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const formateTime = (milesecond) => {
    const totalSeconds = parseInt(Math.floor(milesecond / 1000));
    const totalMinit = parseInt(Math.floor(totalSeconds / 60));
    const totalHour = parseInt(Math.floor(totalMinit / 60));
    const day = parseInt(Math.floor(totalHour / 24));
    const hours = parseInt(Math.floor(totalHour % 60));
    const minutes = parseInt(Math.floor(totalMinit % 60));
    const second = parseInt(Math.floor(totalSeconds % 60));
    return { day, hours, minutes, second };
  };

  const { day, hours, minutes, second } = formateTime(time);

  return (
    <div className="text-primary_black flex items-center gap-3 xl:gap-4">
      <div className="flex flex-col items-start">
        <p className="font-poppins font-medium text-xs capitalize">Days</p>
        <h5 className="font-inter font-bold text-xl xl:text-[32px] uppercase mt-1">
          {day ? day : "00"}
        </h5>
      </div>
      {/* dots  */}
      <div className="flex flex-col items-center gap-y-2 animate-pulse">
        <div className="bg-[#E07575] size-1 rounded-full"></div>
        <div className="bg-[#E07575] size-1 rounded-full"></div>
      </div>
      <div className="flex flex-col items-start">
        <p className="font-poppins font-medium text-xs capitalize">Hours</p>
        <h5 className="font-inter font-bold text-xl xl:text-[32px] uppercase mt-1">
          {hours ? hours : "00"}
        </h5>
      </div>
      {/* dots  */}
      <div className="flex flex-col items-center gap-y-2 animate-pulse">
        <div className="bg-[#E07575] size-1 rounded-full"></div>
        <div className="bg-[#E07575] size-1 rounded-full"></div>
      </div>
      <div className="flex flex-col items-start">
        <p className="font-poppins font-medium text-xs capitalize">Minutes</p>
        <h5 className="font-inter font-bold text-xl xl:text-[32px] uppercase mt-1">
          {minutes ? minutes : "00"}
        </h5>
      </div>
      {/* dots  */}
      <div className="flex flex-col items-center gap-y-2 animate-pulse">
        <div className="bg-[#E07575] size-1 rounded-full"></div>
        <div className="bg-[#E07575] size-1 rounded-full"></div>
      </div>
      <div className="flex flex-col items-start">
        <p className="font-poppins font-medium text-xs capitalize">Seconds</p>
        <h5 className="font-inter font-bold text-xl xl:text-[32px] uppercase mt-1">
          {second ? second : "00"}
        </h5>
      </div>
    </div>
  );
};

export default Timer;
