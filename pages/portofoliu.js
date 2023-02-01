import React from "react";
import SectiunePortofoliu from './../components/SectiunePortofoliu';

function portofoliu() {
  const tipuri = [
    {
        nume: "Global Service Rampalace Imobiliare",
        subtitle:"Proiectare, consultanta, compartimentare interioara, finisaje interioare, finisaje exterioare",
        numar: 5 ,
        folder:"serv-ramp"
    },
    {
        nume: "Jesuit Refugee Service Romania",
        subtitle:"Proiectare, executie, finisaje interioare, finisaje exterioare",
        numar: 11 ,
        folder:"jesuit"
    },
    {
        nume: "Restaurant Atlantic",
        subtitle:"Realizare documentatie pentru aprobare ISU",
        numar: 1 ,
        folder:"atlantic"
    },
    {
        nume: "Case individuale",
        subtitle:"Proiectare, executie, finisaje interioare, finisaje exterioare",
        numar: 11, 
        folder:"indiv"
    },
    
    {
        nume: "Restaurant Benjamins",
        subtitle:"Realizare documentatie pentru aprobare ISU",
        numar: 1, 
        folder:"benj"
    },
    {
        nume:  "Serus auto service",
        subtitle:"Finisaje interioare, realizare documentatie pentru aprobare ISU",
        numar: 1,
        folder:"auto" 
    },

  ];

  return (
    <div className='bg-blue-1  px-10 md:px-40 xl:px-80 py-10 overflow-hidden  '>
      <h1 className='text-blue-900 text-4xl lg:text-6xl  max-w-sm font-bold   lg:max-w-xl xl:max-w-2xl'>
        Proiectele noastre
      </h1>
      {tipuri.map(({nume, numar, folder, subtitle},i)=>(
        <SectiunePortofoliu key={i} nume={nume} numar={numar} folder={folder} subtitle={subtitle} />
      ))}

    </div>
  );
}

export default portofoliu;
