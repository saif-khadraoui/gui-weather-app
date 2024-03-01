import React, { useState, useEffect } from 'react'
import styles from "./home.module.css"
import { IoSearch } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import Axios from "axios";


function Home() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const d = new Date().getDay()
  const currentDay = days[d]
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [location, setLocation] = useState("")
  const [chosenLocation, setChosenLocation] = useState("")
  const [weatherData, setWeatherData] = useState({
    temperature: null,
    time: null,
    precipitation: null,
    humidity: null,
    wind: null
  })
  const [weeklyWeather, setWeeklyWeather] = useState([])

  const enterSearch = async (event) => {
    if (event.key == "Enter"){
      await searchWeather()
    }
  }

  const searchWeather = async () => {
    console.log(weeklyWeather)
    setChosenLocation(location)

    const apiKey = "286326f4933546ffacd81752240103"
    // await Axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`).then((response) => {
    //   console.log(response)
 
    // })

    await Axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=5&aqi=no&alerts=no`).then((response) => {
      console.log(response)
      setWeatherData({
        temperature: response.data.current.temp_c,
        time: response.data.location.localtime.slice(11, response.data.location.localtime.length),
        precipitation: response.data.current.precip_in,
        humidity: response.data.current.humidity,
        wind: response.data.current.wind_kph,
        icon: response.data.current.condition.icon
      })
      console.log(response.data?.forecast?.forecastday)
      setWeeklyWeather(response.data?.forecast?.forecastday)
    })


  }

  useEffect(() => {

    
    const getLocation = async () => {
      // const apiKey = "AIzaSyAtcogGL_3iJSG-zhsONFnbtYkCQaPi3HU"
      // await Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position?.latitude},${position?.longitude}&key=${apiKey}`).then((response) => {
      //   console.log(response)
      // })
    }

    // const getCurrentWeather = async () => {
    //   const apiKey = "286326f4933546ffacd81752240103"
    //   await Axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`).then((response) => {
    //     console.log(response)
    //   })
    // }

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        getLocation()
        // getCurrentWeather()
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.location}>
            <FaLocationArrow />
            {/* <p>{position.latitude}, {position.longitude}</p> */}
            <p>{chosenLocation ? chosenLocation : (position.latitude, position.longitude)}</p>
          </div>
          <div className={styles.input}>
            <input type="text" placeholder='search a city' onChange={((e) => setLocation(e.target.value))} onKeyDown={enterSearch}/>
            <IoSearch onClick={searchWeather}/>
          </div>
        </div>
        <div className={styles.homeComponents}>
          <div className={styles.summaryWeather}>
            <div className={styles.top}>
              <h6>{currentDay}</h6>
              <h6>{weatherData?.time}</h6>
            </div>
            <div className={styles.middle}>
              <div className={styles.temperature}>
                <h6>{weatherData?.temperature}°</h6>
              </div>
              <div className={styles.weatherIcon}>
                {/* <MdSunny style={{ width: "90px", height: "90px" }}/> */}
                <img src={weatherData?.icon} alt='' />
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.info}>
                <p>Precipitation: <span>{weatherData?.precipitation} inches</span></p>
              </div>
              <div className={styles.info}>
                <p>Humidity: <span>{weatherData?.humidity}</span></p>
              </div>
              <div className={styles.info}>
                <p>Wind: <span>{weatherData?.wind} km/h</span></p>
              </div>
            </div>

          </div>
          <div className={styles.weeklyWeather}>
              {weeklyWeather ? (
                <>
                  {weeklyWeather.map((forecastday, idx) => {
                    return (
                      <div className={styles.day}>
                        <h4>{days[(d + idx + 1) % days.length]}</h4>
                        <img src={forecastday.day.condition.icon} alt=""/>
                        <h3>{forecastday.day.avgtemp_c}°</h3>
                      </div>
                    )
                  })}
                </>
              ) : (
                <>
                </>
              )}
              {/* <div className={styles.day}></div>
              <div className={styles.day}></div>
              <div className={styles.day}></div>
              <div className={styles.day}></div>
              <div className={styles.day}></div> */}
          </div>
          <div className={styles.inDepthWeather}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home