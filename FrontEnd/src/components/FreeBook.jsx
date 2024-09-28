import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json"
import Card from './Card';
function FreeBook() {
   const filterData=list.filter((data)=>
    data.catagory==="Free"
   );
   
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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

   

  return (
    <>
    <div className='max-w-screen-2xl container  mx-auto md:px-20 px-4 mt-12 '>
      
      <h1 className='font-semibold text-xl '>Free Books Offers</h1>
      <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quos nemo provident reprehenderit ullam recusandae similique ipsam aperiam optio quis nihil, aspernatur sequi illum. Nemo!</p>
     

    
   
    <div  className="slider-container ">
    <Slider {...settings}>
        {filterData.map((item)=>(
          <Card item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default FreeBook
