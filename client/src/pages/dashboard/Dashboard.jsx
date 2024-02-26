import React from 'react'
import styles from "./dashboard.module.css"
import Sidebar from '../../components/sidebar/Sidebar'
import { Outlet } from "react-router-dom"

function Dashboard() {
  return (
    <div className={styles.container}>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Dashboard