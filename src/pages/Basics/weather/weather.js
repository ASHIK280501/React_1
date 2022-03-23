import React,{useState,useEffect} from 'react'
import "./style.css"
import Weathercard from './weathercard';

const Weather = () => {
    const[searchValue,setSearchValue] = useState("kovilpatti");
    const[tempInfo, setTempInfo] = useState({});
    const weatherInfo = async () => {
        try {
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=8611f5797499aa04598abc03157d926b`

            const res= await fetch(url);
            const data = await res.json();

            const{temp,humidity,pressure} = data.main;
            const {main : weathermood} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country,sunset}=data.sys;

            const myNewWeatherInfo= {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                 sunset};
                setTempInfo(myNewWeatherInfo);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect (()=>{
        weatherInfo()// eslint-disable-next-line 
    },[]);
    
    return (
        <>
        <div className='all'>
          <div className="wrap">
              <div className="search">
                  <input type="search" placeholder="Search..." autoFocus id="search" className="searchTerm"
                  value={searchValue}
                  onChange={(e)=>setSearchValue(e.target.value)}/>
                  <button className="searchButton" type="button" onClick={weatherInfo}>Search</button>
              </div>
          </div>

        <div className='container pb-5 mb-5'>
         <Weathercard tempInfo={tempInfo}/>
         </div>
         </div> 
        </>
    )
}

export default Weather
