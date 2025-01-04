import React, { useEffect, useState } from "react";

const Timer2 = () => {
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
    <div>
      {" "}
      <div className="text-primary_black flex items-center gap-4">
        <div className="flex flex-col-reverse items-center justify-center bg-primary_white size-[62px] rounded-full">
          <p className="font-poppins font-normal text-[10px] capitalize">
            Days
          </p>
          <h5 className="font-inter font-bold text-base uppercase leading-6">
            {day ? day : "00"}
          </h5>
        </div>

        <div className="flex flex-col-reverse justify-center items-center bg-primary_white size-[62px] rounded-full">
          <p className="font-poppins font-normal text-[10px] capitalize">
            Hours
          </p>
          <h5 className="font-inter font-bold text-base leading-6 uppercase">
            {hours ? hours : "00"}
          </h5>
        </div>

        <div className="flex flex-col-reverse items-center justify-center bg-primary_white size-[62px] rounded-full">
          <p className="font-poppins font-normal text-[10px] capitalize">
            Minutes
          </p>
          <h5 className="font-inter font-bold text-base leading-6 uppercase">
            {minutes ? minutes : "00"}
          </h5>
        </div>

        <div className="flex flex-col-reverse items-center justify-center bg-primary_white size-[62px] rounded-full">
          <p className="font-poppins font-normal text-[10px] capitalize">
            Seconds
          </p>
          <h5 className="font-inter font-bold text-base leading-6 uppercase">
            {second ? second : "00"}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Timer2;
