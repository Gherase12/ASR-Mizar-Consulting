import React, { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
import { AiFillPhone } from 'react-icons/ai';
import Link from "next/link";

import ContactBtn from "./ContactBtn";
import { useLeanguage } from './../context/LeanguageContext';
import { texts } from './../data/texts';

function Nav() {
  const items = ["Acasa", "Portofoliu"];

   const {leanguage, setLeanguage} =  useLeanguage()
  const [open, setOpen] = useState(false);
 
  const call = () => {
    window.location.href = 'tel:078####';
  };

  return (
    <nav className='w-full top-0 fixed h-16 lg:h-20 shadow-md bg-blue-1 flex justify-between   items-center px-8 z-50 font-nunito font-bold lg:px-20   '>
        

      <Link  href='/'  className="hidden lg:flex my-7" >


        <Image
          src='/Logo.png'
          
          width={130}
          height={100}
        />
      </Link>

      <Link href='/'  className='lg:hidden' >
        <Image src='/Logo.png' width={100} height={100} />
      </Link>
      <div className="flex space-x-2 cursor-pointer" >
          <Image onClick={()=>setLeanguage("ro")} src={"/flags/ro.svg"} width={20} height={20}  />
          <Image onClick={()=>setLeanguage("en")} src={"/flags/gb.svg"} width={20} height={20}  />
        </div>
     
      <div className="text-orange-400 md:hidden space-x-6 flex" >
        <AiFillPhone 
        size={28}
        onClick={call}
        // className='text-orange-400 md:hidden '
        />

      <GiHamburgerMenu
        onClick={() => setOpen(true)}
        size={28}
        // className='text-orange-400 md:hidden '
      />
      </div>

      {/* mobile */}
      <div
        className={`${
          !open
            ? "fixed right-[100%] "
            : "  fixed top-0 pt-40 left-0 text-4xl h-screen w-[100%] pl-20      bg-white     duration-500 ease-in-out z-50 lg:hidden"
        }  `}
      >
        <RiCloseFill
          onClick={() => setOpen(false)}
          size={28}
          className='absolute right-[20px] top-[20px]  text-orange-400 '
        />

        <ul className=' space-y-10 flex-col'>
          {items.map((item, i) => (
            <Link onClick={() => setOpen(false)} key={i} href={i == 0 ? "/" : item.toLowerCase()}>
              <li className='text-blue-900 pt-10 '>{item}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className='hidden  md:flex  space-x-5 items-center lg:text-lg lg:pr-7  '>
        <ul className='md:flex hidden space-x-5'>
          {texts[leanguage].navText.map((item, i) => (
            <Link key={i} href={i == 0 ? "/" : "/portofoliu"}>
              <li className='text-blue-900 hover:text-orange-400 '>{item}</li>
            </Link>
          ))}
        </ul>

        <ContactBtn call={call} />
      </div>
    </nav>
  );
}

export default Nav;
