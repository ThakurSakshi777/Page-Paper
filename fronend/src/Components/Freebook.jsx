import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

const Freebook = () => {
    const [ book , setBook] = useState([])
    useEffect(() =>{
      const getBook = async() =>{
        try {
         const res = await axios.get("http://localhost:4001/book");
         console.log(res.data)
         const data = res.data.filter((data) => data.category == "free");
         setBook(data)
        } catch (error) {
          console.log(error)
        }
      }
      getBook();
    } , [])
    
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


 
  return (
    <div>
    <div className="container px-4 mx-auto max-w-screen-2x1 md:px-20 ">
      <h1 className="pb-2 text-xl font-semibold"> Free Offered Courses</h1>
      <p>
        Hand-picked recommendations from our readers and editors. Find your next
        favorite book
      </p>
    </div>
      {/* sliders */}

      <div className="container px-1 mx-auto slider-container max-w-screen-1 md:px-10">
        <Slider {...settings} >
         {book.map((item)=>(
          <Cards item={item} key={item.id}/>
         ))}
        </Slider>
      </div>
    </div>
  );
};

export default Freebook;


   