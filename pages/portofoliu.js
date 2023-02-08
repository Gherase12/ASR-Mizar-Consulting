import React, { useState } from "react";
import SectiunePortofoliu from "./../components/SectiunePortofoliu";
import CaruselMare from './../components/CaruselMare';

import CaruselMic from './../components/CaruselMic';
import { tipuri } from './../data/tipuri';
import { useLeanguage } from './../context/LeanguageContext';
import { texts } from './../data/texts';
import PortofolioModal from './../components/PortofolioModal';

function Portofoliu() {
  const {leanguage, setLanguage} = useLeanguage()
  const [selected, setSelected] = useState(
    tipuri[leanguage][0]
  );

  const [isModalOpen, setIsModalOpen] = useState(false)

  function closeModal() {
    setIsModalOpen(false)
  }

  function openModal() {
    setIsModalOpen(true)
  }

  const handleClick = (t)=>{
    setSelected(t);
    openModal();
  }


  return (
    <div className='bg-blue-1  px-10 md:px-40 xl:px-80 py-10  overflow-x-hidden font-rock'>
      <h1 className='text-blue-900 text-4xl lg:text-6xl  max-w-sm font-black  mb-10  lg:max-w-xl xl:max-w-2xl xl:mb-16'>
        {texts[leanguage].portofolioTitle}
      </h1>
     
     <div className=" w-full 2xl:max-w-[1400px]  ">
     {tipuri[leanguage].map((t, i) => (
        <li
        key={i}
          // onClick={() => setSelected(t)}
          // className={`flex-1 border-b-2 flex items-center justify-start pl-6 lg:pl-10 ${
          //   t.nume == selected?.nume
          //     ? "bg-blue-900 text-white"
          //     : "bg-white text-blue-900"
          // }  text-lg font-bold   hover:text-white hover:bg-blue-900 cursor-pointer `}
          className="flex flex-col lg:flex-row  mb-6 xl:space-x-5 "
        >
          <h3 
          onClick={() => handleClick(t)}
          className="text-md  cursor-pointer font-bold underline underline-offset-2 xl:text-lg 2xl:text-xl ">
          {t.nume}
          </h3>

          <div className="border w-4 h-0 self-center border-black hidden lg:flex " />
          
          <div className="max-w-md" >
            {t.subtitle}
          </div>
        </li>
      ))}
     </div>
      <CaruselMic setSelected={setSelected} />
      <PortofolioModal selected={selected} closeModal={closeModal} isModalOpen={isModalOpen} />
    </div>
  );
}

export default Portofoliu;
