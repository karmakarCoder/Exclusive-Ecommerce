import React, { useRef } from "react";
import Title from "../../shared/Title";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CategoryCart from "../../shared/Cart/CategoryCart";

const Category = () => {
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
    <div className="pb-16">
      <div className="container">
        <div className="pt-20 border-t-[1px] border-t-borderColor">
          <div className="flex items-end justify-between">
            <Title subtitle={"Categories"} mainTitle={"Browse By Category"} />
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
          {/* category */}
          <div className="xl:pt-10 pt-7 pb-10 xl:pb-14 relative">
            <Splide
              ref={splideRef}
              options={{
                perPage: 6,
                gap: 42,
                arrows: false,
                pagination: false,

                breakpoints: {
                  2000: { perPage: 8, gap: 15 },
                  1500: { perPage: 6, gap: 35 },
                  1400: { perPage: 6, gap: 35 },
                  1300: { perPage: 6, gap: 35 },
                  1200: { perPage: 5, gap: 30 },
                  1100: { perPage: 5, gap: 20 },
                  800: { perPage: 5, gap: 20 },
                  740: { perPage: 5, gap: 10 },
                  415: { perPage: 3, gap: 30 },
                  400: { perPage: 3, gap: 13.5 },
                },
              }}
            >
              <SplideSlide>
                <CategoryCart />
              </SplideSlide>
              <SplideSlide>
                <CategoryCart />
              </SplideSlide>
              <SplideSlide>
                <CategoryCart />
              </SplideSlide>
              <SplideSlide>
                <CategoryCart />
              </SplideSlide>
              <SplideSlide>
                <CategoryCart />
              </SplideSlide>
              <SplideSlide>
                <CategoryCart />
              </SplideSlide>
              <SplideSlide>
                <CategoryCart />
              </SplideSlide>
              <SplideSlide>
                <CategoryCart />
              </SplideSlide>
              <SplideSlide>
                <CategoryCart />
              </SplideSlide>
              <SplideSlide>
                <CategoryCart />
              </SplideSlide>
              <SplideSlide>
                <CategoryCart />
              </SplideSlide>
              <SplideSlide>
                <CategoryCart />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
