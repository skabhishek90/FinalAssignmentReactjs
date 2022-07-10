import React from 'react'
import "./projectcard.css"
export default function projectcard(props) {
  return (
    <div class ="projectcard">
        <img src={props.src} alt=" "></img>
        <h2>{props.heading}</h2>
    </div>

  )
}
