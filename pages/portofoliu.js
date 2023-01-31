import React from "react";
import SectiunePortofoliu from './../components/SectiunePortofoliu';

function portofoliu() {
  const tipuri = [
    {
        nume: "Global Service Rampalace Imobiliare",
        numar: 5 ,
        folder:"serv-ramp"
    },
    {
        nume: "Jesuit Refugee Service Romania",
        numar: 11 ,
        folder:"jesuit"
    },
    {
        nume: "Restaurant atlantic",
        numar: 1 ,
        folder:"atlantic"
    },
    {
        nume: "Case individuale",
        numar: 11, 
        folder:"indiv"
    },
    
    {
        nume: "Restaurant Benjamins",
        numar: 1, 
        folder:"benj"
    },
    {
        nume:  "Serus auto service",
        numar: 1,
        folder:"auto" 
    },

  ];

  return (
    <div className='bg-blue-1  px-10 md:px-40 xl:px-80 py-10 overflow-hidden  '>
      <h1 className='text-blue-900 text-4xl lg:text-6xl  max-w-sm font-bold   lg:max-w-xl xl:max-w-2xl'>
        Proiectele noastre
      </h1>
      {tipuri.map(({nume, numar, folder},i)=>(
        <SectiunePortofoliu key={i} nume={nume} numar={numar} folder={folder}  />
      ))}

    </div>
  );
}

export default portofoliu;
