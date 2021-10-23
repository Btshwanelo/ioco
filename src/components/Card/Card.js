import React from 'react'
import './Card.css'

function Card({classN, title}) {
    return (
        <div class={classN}>
  <img className="card__img" src="https://via.placeholder.com/150" alt="Avatar" />
  <div class="card__container">
    <h4><b>{title}</b></h4> 
    <button className="card_button">START HERE <svg width="6" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 9l4-4-4-4 4 4z" stroke="#fff" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
  </div>
</div>
    )
}

export default Card
