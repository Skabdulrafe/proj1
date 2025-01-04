import React from 'react'
import '../assets/css/CardComp.css'
const CardComp = (props) => {
  return (
   <div className='teri'>
     <div  className='card'>
        < img src={props.src} className="classimg"/>
        <br/>
        <div className='text'>
        <h1>{props.services}</h1>
        <b>{props.des}</b>
        </div>
        
    </div>
   </div>
  )
}

export default CardComp

