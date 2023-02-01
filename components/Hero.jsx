import React from "react";
import Image from "next/image";
import ContactBtn from "./ContactBtn";
function Hero() {
  return (
    <div className='bg-gradient-to-r from-blue-800 to-transparent  px-10 md:px-40 xl:px-80   pt-14 2xl:pt-44 lg:pt-20 2xl:pb-20 relative w-full'>
      <Image src='/hero-img.webp' fill className='object-cover z-[-10] ' />
      <h1 className='text-white text-4xl lg:text-6xl  max-w-sm  lg:max-w-xl xl:max-w-2xl  '>
        Construieste visul tau cu ASR Mizar Consulting
      </h1>
      {/* <p className='text-gray-200 text-lg max-w-[280px] mt-8  xl:max-w-xl'>
        Cu peste 6 ani de experiență în domeniul construcțiilor, suntem
        pregătiți să transformăm orice idee în realitate
      </p> */}

      <div className='py-10'   >
        <ContactBtn />
      </div>
    </div>
  );
}

export default Hero;
