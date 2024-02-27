import React from 'react'
import styles from "./sidebar.module.css"
import { FaCloud } from "react-icons/fa6";
import { IoCloudyNightSharp } from "react-icons/io5";
import MenuLink from './menuLink/MenuLink';

function Sidebar() {

  const items = [
    {
      title: "Weather",
      path: "/dashboard/",
      icon: <FaCloud />
    },
    {
      title: "History",
      path: "/dashboard/history",
      icon: <FaCloud />
    },
    {
      title: "Analytics",
      path: "/dashboard/analytics",
      icon: <FaCloud />
    },
    {
      title: "Alerts",
      path: "/dashboard/alerts",
      icon: <FaCloud />
    }
  ]

  const itemsLoggedIn = []

  return (
    <div className={styles.container}>
        <div className={styles.logo}>
          <IoCloudyNightSharp style={{ width: "32px", height: "32px" }}/>
          <h3>FarmCast</h3>
        </div>
        <ul className={styles.list}>
          {items.map((item, idx) => {
            return <MenuLink item={item}/>
          })}
        </ul>
    </div>
  )
}

export default Sidebar