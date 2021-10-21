import React from 'react'
import "../App.css";
import ImageSlider from "../components/ImageSlider";

import { VIDEOS, IMAGES} from "../components/data/data";



function Home() {
    return (
      <div className='App'>
      <div className='container'>
        <ImageSlider images={IMAGES} />
      </div>
    </div>
    )
}

export default Home