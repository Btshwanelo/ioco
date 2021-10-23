import React from 'react'
import './Home.css'
import CardSlider from '../../components/Slider/CardSlider'

import {IMAGES} from "../../assets/data/data";



function Home() {
    return (
      <div className='App'>
      <div className='container'>
        <div className="heading">
        <p>What are you</p> 
        <p><b>here to do?</b></p>
        </div>
        <CardSlider images={IMAGES} />
      </div>
    </div>
    )
}

export default Home