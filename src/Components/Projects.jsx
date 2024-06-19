import React from "react";
import { Carousel, ThemeProvider } from "@material-tailwind/react";
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { BiArrowFromLeft } from "react-icons/bi";
import { ChevronRight } from "@material-tailwind/react";
import Footer from "./Footer";

export default function Projects() {
  const carouselTheme = {
    carousel: {
      defaultProps: {
        prevArrow: ({ loop, handlePrev, firstIndex }) => {
          return (
            <button
              onClick={handlePrev}
              // disabled={!loop && firstIndex}
              className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-black hover:bg-white/10 active:bg-white/30 grid place-items-center"
            >
              <HiArrowSmallLeft strokeWidth={3} className="-ml-1 h-7 w-7" />
            </button>
          );
        },
        nextArrow: ({ loop, handleNext, lastIndex }) => (
          <button
            onClick={handleNext}
            // disabled={!loop && lastIndex}
            className="!absolute top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-black hover:bg-white/10 active:bg-white/30 grid place-items-center"
          >
            <HiArrowSmallRight strokeWidth={3} className="ml-1 h-7 w-7" />
          </button>
        ),
        navigation: ({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                  activeIndex === i ? "bg-black" : "bg-black/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        ),
        autoplay: false,
        autoplayDelay: 5000,
        transition: {
          type: "tween",
          duration: 0.5,
        },
        loop: false,
        className: "",
      },
      styles: {
        base: {
          carousel: {
            position: "relative",
            width: "w-full",
            height: "h-full",
            overflowX: "overflow-x-hidden",
            display: "flex",
          },

          slide: {
            width: "w-full",
            height: "h-full",
            display: "inline-block",
            flex: "flex-none",
          },
        },
      },
    },
  };
  return (
    <div id="projects" className="projects-div">
      <h2 className="text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl relative top-10 lg:top-12 xl:top-8 2xl:top-12 text-center mb-24 md:mb-28 lg:mb-28 xl:mb-20 2xl:mb-20">
        Projects
      </h2>
      <div className="container mb-20 xl:mb-28">
        <ThemeProvider value={carouselTheme}>
          <Carousel
            transition={{ duration: 1 }}
            className="carousel rounded-xl"
          >
            <a href="https://nixfixllc.com/">
              <img src="nfl.png" className="carousel-img w-full object-cover" />
            </a>

            <a href="https://mysticmeditation.netlify.app">
              <img
                src="mysticmeditation.png"
                className="carousel-img  w-full"
              />
            </a>
            <a href="https://cheery-pastelito-184353.netlify.app/">
              <img src="rockpapertank.png" className="carousel-img  w-full" />
            </a>
            <a href="https://rad-frangipane-ab7eaa.netlify.app/">
              <img src="pupbowl.png" className="carousel-img  w-full" />
            </a>
            <a href="https://astonishing-dolphin-abeb89.netlify.app/">
              <img src="qwirty.png" className="carousel-img  w-full" />
            </a>
            <a href="https://ornate-panda-539b81.netlify.app/">
              <img src="secondsite.png" className="carousel-img  w-full" />
            </a>
            <a href="https://vocal-zuccutto-ced39d.netlify.app/">
              <img src="strangersThings.png" className="carousel-img  w-full" />
            </a>
            <a href="https://papaya-praline-b8ce49.netlify.app/">
              <img src="tictactoe.png" className="carousel-img  w-full " />
            </a>
            <a href="https://amca.onrender.com/">
              <img src="amca.png" className="carousel-img  w-full " />
            </a>
            <a href="https://fabulous-klepon-630ec6.netlify.app/">
              <img src="firstsite.png" className="carousel-img  w-full " />
            </a>
          </Carousel>
        </ThemeProvider>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
