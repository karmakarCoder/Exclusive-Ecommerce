import React, { useRef } from "react";
import Title from "../../shared/Title";
import Timer from "../../shared/Timer";
import PrimaryCart from "../../shared/Cart/PrimaryCart";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Flash = () => {
  const splideRef = useRef(null);

  const handlePrev = () => {
    if (splideRef.current) {
      splideRef.current.go("<");
    }
  };

  const handleNext = () => {
    if (splideRef.current) {
      splideRef.current.go(">");
    }
  };
  return (
    <div className="xl:pt-24 pt-0 pb-14">
      <div className="container">
        <div className="flex items-end justify-between">
          <div className="flex items-start sm:items-end sm:flex-row flex-col sm:gap-7 gap-4 xl:gap-16">
            <Title subtitle={"Today’s"} mainTitle={"Flash Sales"} />
            <Timer />
          </div>
          {/* Custom Arrows */}
          <div className="hidden sm:flex items-center gap-x-2">
            <button
              className="custom-arrow custom-arrow--prev size-9 xl:size-[46px] rounded-full bg-secondary text-primary_black hover:bg-secondary2 transition hover:text-primary_white active:scale-95 text-xl xl:text-2xl flex items-center justify-center"
              onClick={handlePrev}
            >
              <GoArrowLeft />
            </button>
            <button
              className="custom-arrow custom-arrow--next size-9 xl:size-[46px] rounded-full bg-secondary text-primary_black hover:bg-secondary2 transition hover:text-primary_white active:scale-95 text-xl xl:text-2xl flex items-center justify-center"
              onClick={handleNext}
            >
              <GoArrowRight />
            </button>
          </div>
        </div>

        {/* product */}
        <div className="xl:pt-10 pt-7 pb-10 xl:pb-14 relative">
          <Splide
            ref={splideRef}
            options={{
              perPage: 4,
              gap: 20,
              pagination: false,
              autoWidth: true,
              arrows: false,

              breakpoints: {
                1100: { perPage: 5, gap: 30 },
                800: { perPage: 4, gap: 20 },
                740: { perPage: 4, gap: 10 },
                400: { perPage: 2, gap: 20 },
              },
            }}
          >
            <SplideSlide>
              <PrimaryCart />
            </SplideSlide>
            <SplideSlide>
              <PrimaryCart />
            </SplideSlide>
            <SplideSlide>
              <PrimaryCart />
            </SplideSlide>
            <SplideSlide>
              <PrimaryCart />
            </SplideSlide>
            <SplideSlide>
              <PrimaryCart />
            </SplideSlide>
            <SplideSlide>
              <PrimaryCart />
            </SplideSlide>
          </Splide>
        </div>

        {/* view all */}
        <div className="flex items-center justify-center">
          {" "}
          <button className="font-poppins font-medium hover:bg-red-600 transition xl:text-base text-xs capitalize text-primary_white bg-secondary2 rounded py-2 xl:py-4 px-4 xl:px-12">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flash;
