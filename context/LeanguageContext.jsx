import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";


const LeanguageContext = createContext();
export const useLeanguage = () => useContext(LeanguageContext);

export const LeanguageProvider = ({ children }) => {

   	const [leanguage ,setLeanguage] = useState("ro")
	

 	 

  
  const value = {leanguage, setLeanguage};

  	return (
 	   <LeanguageContext.Provider value={value}>
    	  {children}
   	 </LeanguageContext.Provider>
  		);
	};

