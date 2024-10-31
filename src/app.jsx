import './App.css'
import React from 'react'
import { Header,Exhibitions,Gallery,About } from './components'


const App = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Gallery/>       
      <Exhibitions/>          
    </div>
  )
}

export default App