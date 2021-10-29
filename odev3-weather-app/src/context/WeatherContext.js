import axios from "axios";
import { useContext,createContext, useState, useEffect } from "react";
import cityList from "../cities.json";

const WeatherContext=createContext()

const WeatherProvider =({children})=>{
    const NameOfCities=cityList.map(c=>c.name);
    
    const [city, setCity]= useState(localStorage.getItem("city")|| "İstanbul")
    const [data, setData]= useState([])
    

    useEffect(() => {
        axios(`http://api.openweathermap.org/data/2.5/weather?q=${city}&cnt=7&appid=156bf08fa1f75d4de7872896375fe2f5&units=metric&lang=tr`)
        .then((res)=>setData(res.data))
        
     }, [city])

   const weatherData= data.weather?.map(d=>d.description).join();
   const tempMin=data.main?.temp_min;
   const tempMax=data.main?.temp_max;


     
  

    
    const values={weatherData,NameOfCities,city,setCity,tempMin,tempMax}

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>

}


const useWeather=()=>useContext(WeatherContext);
export{useWeather,WeatherProvider}
