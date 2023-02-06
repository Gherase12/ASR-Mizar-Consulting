import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import { tipuri } from './../data/tipuri';
import { useLeanguage } from './../context/LeanguageContext';



function CaruselMic({setSelected}) {

    const {leanguage, setLanguage} = useLeanguage()

    const handleClick = (t) => {
        setSelected(t)
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    

  return (
    <div className="mt-20" >

      

        <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
       
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        // navigation={true}
        modules={[Autoplay]}
        className='h-64 lg:h-80'
      >
         {tipuri[leanguage].map((t,i1)=>(
            [...Array(t.numar)].map((_, i2) => (
                <SwiperSlide key={i2} className='  mb-20'>
                  <div onClick={()=> handleClick(t) } className="w-64 h-64 cursor-pointer" >
      
                  <Image
                    src={`/${t.folder}/img-${i2 + 1}.webp`}
                    className='object-cover w-64 h-64'
                    fill
                  />
                  </div>
                </SwiperSlide>
              ))
        ))}
      </Swiper>
    </div>
  )
}

export default CaruselMic