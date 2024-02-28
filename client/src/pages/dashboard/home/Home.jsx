import React from 'react'
import styles from "./home.module.css"
import { IoSearch } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import { MdSunny } from "react-icons/md";


function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.location}>
            <FaLocationArrow />
            <p>location</p>
          </div>
          <div className={styles.input}>
            <input type="text" placeholder='search a city' />
            <IoSearch />
          </div>
        </div>
        <div className={styles.homeComponents}>
          <div className={styles.summaryWeather}>
            <div className={styles.top}>
              <h6>Monday</h6>
              <h6>11:43pm</h6>
            </div>
            <div className={styles.middle}>
              <div className={styles.temperature}>
                <h6>8°</h6>
              </div>
              <div className={styles.weatherIcon}>
                <MdSunny style={{ width: "90px", height: "90px" }}/>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.info}>
                <p>Precipitation: <span>17%</span></p>
              </div>
              <div className={styles.info}>
                <p>Humidity: <span>5%</span></p>
              </div>
              <div className={styles.info}>
                <p>Wind: <span>36 km/h</span></p>
              </div>
            </div>

          </div>
          <div className={styles.weeklyWeather}>
              <div className={styles.day}></div>
              <div className={styles.day}></div>
              <div className={styles.day}></div>
              <div className={styles.day}></div>
              <div className={styles.day}></div>
              {/* <div className={styles.day}></div> */}
          </div>
          <div className={styles.inDepthWeather}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home