import React from 'react'
import { Brand, CallToAction, Feature, Navbar} from './assets'
import { Blog, Footer, Header,Features, Possibility, WhatWeb } from './Container'
import './App.css'
const App = () => {
  return (
      <div className="App">
        <div className="gradient__bg">
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatWeb/>
        <Feature/>
        <Possibility/>
        <CallToAction/>
        <Blog/>
        <Footer/>
      </div>
)}

export default App
