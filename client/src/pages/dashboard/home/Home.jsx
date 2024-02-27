import React from 'react'
import styles from "./home.module.css"
import { IoSearch } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";


function Home() {
  return (
    <div className={styles.container}>
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

        </div>
        <div className={styles.weeklyWeather}>
          <div className={styles.day}></div>
          <div className={styles.day}></div>
          <div className={styles.day}></div>
          <div className={styles.day}></div>
          <div className={styles.day}></div>
          {/* <div className={styles.day}></div> */}
        </div>
      </div>
    </div>
  )
}

export default Home