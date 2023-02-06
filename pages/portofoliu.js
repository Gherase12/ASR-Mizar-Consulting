import React, { useState } from "react";
import SectiunePortofoliu from "./../components/SectiunePortofoliu";
import CaruselMare from './../components/CaruselMare';

import CaruselMic from './../components/CaruselMic';
import { tipuri } from './../data/tipuri';

function portofoliu() {
  const [selected, setSelected] = useState(
    {
      nume: "Global Service Rampalace Imobiliare",
      subtitle:
        "Proiectare, consultanta, compartimentare interioara, finisaje interioare, finisaje exterioare",
      numar: 5,
      folder: "serv-ramp",
    },
  );

  

  return (
    <div className='bg-blue-1  px-10 md:px-40 xl:px-80 py-10  overflow-x-hidden '>
      <h1 className='text-blue-900 text-4xl lg:text-6xl  max-w-sm font-bold  mb-10  lg:max-w-xl xl:max-w-2xl'>
        Proiectele noastre
      </h1>
     
      <div className=' w-full 2xl:max-w-[1400px] 2xl:h-[500px] flex flex-col-reverse 2xl:flex-row'>
        <ul className='h-full 2xl:w-[300px] flex flex-col '>
          {tipuri.map((t, i) => (
            <li
              onClick={() => setSelected(t)}
              className={`flex-1 border-b-2 flex items-center justify-start pl-6 lg:pl-10 ${
                t.nume == selected?.nume
                  ? "bg-blue-900 text-white"
                  : "bg-white text-blue-900"
              }  text-lg font-bold   hover:text-white hover:bg-blue-900 cursor-pointer `}
            >
              {t.nume}
            </li>
          ))}
        </ul>
      <CaruselMare type={selected} />
      </div>
      <CaruselMic setSelected={setSelected} />

    </div>
  );
}

export default portofoliu;
