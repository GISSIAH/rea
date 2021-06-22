import React from 'react'
import './Cards.css'
function listItem(props) {
    return (
        <>
          <li className="cards__item">
            <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.icon} alt="some card" className="cards__item__img">
          </img>
      </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">{props.name}</h5>
                </div>
          </li>  
        </>
    )
}

export default listItem