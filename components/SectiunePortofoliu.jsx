import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

function SectiunePortofoliu({ nume, numar, folder }) {
  return (
    <div>
      <h2 className='text-blue-900 text-2xl font-bold  lg:text-4xl my-5 lg:my-10  '>
        {nume}
      </h2>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
       
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className='h-64 lg:h-80'
      >
        {[...Array(numar)].map((_, i) => (
          <SwiperSlide key={i} className='  mb-20'>
            <div className="w-64 h-64" >

            <Image
              src={`/${folder}/img-${i + 1}.webp`}
              className='object-cover w-64 h-64'
              fill
            />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SectiunePortofoliu;
