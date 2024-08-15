"use client";

import Image from "next/image";
import Title from "../title";
import { Carousel } from "../ui/material-tailwind";
import { IconButton } from "@material-tailwind/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const testimonial = [
  {
    img: "/assets/testimonial/person1.jpeg",
  },
  {
    img: "/assets/testimonial/person1.jpeg",
  },
  {
    img: "/assets/testimonial/person1.jpg",
  },
  {
    img: "/assets/testimonial/person1.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="text-center">
      <Title className="text-3xl 2xl:text-8xl xl:text-6xl">Testimonials</Title>
      <p className='text-xs lg:px-60 my-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nemo aperiam corrupti quia! Ab voluptate illo odio in sol</p>

      <Carousel
        draggable={"true"}
        className="flex relative max-w-[10rm]   overflow-hidden py-10 w-full gap-2 md:px-4 scrollbar-none mt-10"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute -bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i
                    ? "w-10 bg-primaryOrange"
                    : "w-6 bg-[#D9D9D9]"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handlePrev}
            className="!absolute lg:inline-block hidden top-2/4 left-0 -translate-y-2/4"
          >
            <FiArrowLeft className="h-8 w-8" />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handleNext}
            className="!absolute lg:inline-block hidden top-2/4 right-0 -translate-y-2/4"
          >
            <FiArrowRight className="h-8 w-8" />
          </IconButton>
        )}
      >
        {testimonial.map((testimonial, index) => (
          <div
            key={index}
            className="flex gap-6 md:items-start items-center rounded-md md:flex-row flex-col relative -left-1  lg:left-[16%] xl:left-2/4 xl:-translate-x-2/4 px-10 md:w-[40rem] py-7 bg-[#F8F8F8]"
          >
            <div className="w-[120px] relative h-[120px] rounded-full bg-red-00">
              <Image
                src={testimonial.img}
                alt="person"
                width={100}
                height={100}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div className="relative flex flex-col items-start gap-2">
              <div className="relative flex items-start gap-2">

              <span className="md:text-4xl text-primaryOrange">
                &ldquo;
              </span>

              <p className="text-xs max-w-sm mt-3 relative text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                impedit qui dolorem quia cupiditate repudiandae laborum
                aspernatur nam veniam ratione libero aliquid nisi fugit
                possimus, eligendi vero. Saepe, qui voluptatum!
                <span className="md:text-[36px] absolute leading-none md:top-[50px] bottom-0 ml-1 text-primaryOrange">
                  &rdquo;
                </span>
              </p>
              </div>
              <div className="flex flex-col text-start  mt-3 ml-5">

              <h1 className="text-sm font-semibold">Name</h1>
              <span className="ml-0 text-xs">CEO</span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
