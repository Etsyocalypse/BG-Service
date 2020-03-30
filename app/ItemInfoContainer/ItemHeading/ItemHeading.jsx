import React from 'react';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

var ItemHeading = (props)=>(
  <div className='item-heading'>
    <div className='row'>
      <span className='item-info-store-name'>{props.storeName}</span>
      <span className="divider-bar">|</span>
      <span className='item-info-store-rating'><a href='#reviews'>
      <span>{props.storeReviews} sales</span>
      <span className="divider-bar">|</span>
      <span>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      </span>
      </a></span>
    </div>
    <div className='item-info-item-name'>{props.itemName}</div>
    <div className='item-info-badges'>
    {props.badges.map(badge=>(
      <span className='item-info-badge'>{badge}</span>
    ))}
    </div>
  </div>
)

export default ItemHeading;