import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { AiOutlineClose } from 'react-icons/ai';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import Image from "next/image";

import { motion } from "framer-motion";

function CaruselMare({ type, closeModal }) {
  return (
    <motion.div className=' xl:w-[1000px]  w-md relative h-[500px] '>
        {/* <div className="absolute z-20 text-sm lg:text-lg  p-1 lg:p-3 bg-white text-blue-900 font-bold top-0 md:rounded-br-[30px] " > {type.subtitle}</div> */}

        <div onClick={closeModal} className="absolute flex items-center justify-center md:top-3 cursor-pointer right-0 md:right-3 text-2xl z-20 bg-white rounded-full w-10 h-10" >

        <AiOutlineClose  />
        </div>
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
              className='w-10 h-10 lg:w-64  lg:h-64  border-2'
            >
              <Image
                src={`/${type.folder}/img-${i + 1}.webp`}
                className='object-cover w-10 h-10 lg:w-64  lg:h-64 '
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
