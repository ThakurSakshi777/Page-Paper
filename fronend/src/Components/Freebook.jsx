import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json";
import Cards from "./Cards";

const Freebook = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const filterData = list.filter((data) => data.category == "free");
  console.log(filterData);
  return (
    <div>
    <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 ">
      <h1 className="font-semibold text-xl pb-2"> Free Offered Courses</h1>
      <p>
        Hand-picked recommendations from our readers and editors. Find your next
        favorite book
      </p>
    </div>
      {/* sliders */}

      <div className="slider-container max-w-screen-1 container mx-auto md:px-10 px-1">
        <Slider {...settings} >
         {filterData.map((item)=>(
          <Cards item={item} key={item.id}/>
         ))}
        </Slider>
      </div>
    </div>
  );
};

export default Freebook;


   