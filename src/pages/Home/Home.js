import React from 'react'
import "../App.css";
import CardSlider from '../components/Slider/CardSlider'

import { IMAGES} from "../assets/data/data";



function Home() {
    return (
      <div className='App'>
      <div className='container'>
        <CardSlider images={IMAGES} />
      </div>
    </div>
    )
}

export default Home