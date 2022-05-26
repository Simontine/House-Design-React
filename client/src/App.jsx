import { useState } from 'react'
import './App.css'
import React,{Component} from 'react'
import {Navbar, footer} from './component'
import { Homepage } from './pages/pages'

function App() {
  return (
    
    <div>
      <Navbar />
      <Homepage />
      {/* <footer /> */}
    </div>
  )
}

export default App
