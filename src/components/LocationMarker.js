import React from 'react'
import mapIcon from '../map-marker.png';

export const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <img style={{width: "20px", height: "20px"}} src={mapIcon} className="location-icon"/>
    </div>
  )
}
