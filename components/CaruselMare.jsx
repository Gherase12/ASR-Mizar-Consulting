import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import Image from "next/image";

import { motion } from "framer-motion";

function CaruselMare({ type }) {
  return (
    <motion.div className=' xl:w-[1000px] relative '>
        <div className="absolute z-20 text-sm lg:text-lg  p-1 lg:p-3 bg-white text-blue-900 font-bold top-0  " > {type.subtitle}</div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=''
      >
        {[...Array(type.numar)].map((_, i) => (
          <SwiperSlide key={i} className='  mb-20'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className='w-64  h-64'
            >
              <Image
                src={`/${type.folder}/img-${i + 1}.webp`}
                className='object-cover w-64 h-64'
                fill
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

export default CaruselMare;
