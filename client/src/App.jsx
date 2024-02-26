import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from './pages/dashboard/Dashboard'
import Home from './pages/home/Home'
import "./App.css"

function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/" index element={<Home />} />
          </Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App
