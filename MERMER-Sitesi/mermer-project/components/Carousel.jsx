import Image from "next/image";
import React from "react";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        appenDots: (dots) => (
            <div>
              <ul>{dots}</ul>
            </div>
          ),
          customPaging: (i) => (
            <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
          ),
      };

  return (
    <div className="h-screen w-full container mx-auto -mt-[80px]">
      <div className="absolute top-20 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            src="/Images/mermer7.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <Slider {...settings}>
      <div>
          <div className="mt-48  text-white flex flex-col items-start gap-y-10">
            <Title addClass="text-6xl">Vişne Mermeri</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Deneme
            </p>
            <button className="btn-primary">Şimdi Sipariş Ver</button>
          </div>
        </div>
        <div>
          <div className="relative text-white top-48 flex flex-col items-start gap-y-10">
            <Title addClass="text-6xl">Bal Onyx Mermer</Title>
            <p className="text-sm sm:w-2/5 w-full">
             Sınama
            </p>
            <button className="btn-primary">Şimdi Sipariş Ver</button>
          </div>
        </div>
      </Slider>
      
    </div>
  );
};

export default Carousel;