import React from 'react'
import './Card.css'

function Card({classN, title, children}) {
    return (
        <div class={classN}>
  <img className="card__img" src="https://via.placeholder.com/150" alt="Avatar" />
  <div class="card__container">
    <h4><b>{title}</b></h4> 
      {children}
  </div>
</div>
    )
}

export default Card
