import React from 'react'
import {data} from "./AdvertiserData";
import "./Advertiser.css";

const Advertisers = () => {
  return (
    <div className='advetiser-menu'>
        <h3>Advertiser</h3>
      <div className='layout'>
        {data.map((item) =>{
            return(
                <div key={item.id} className='layout-item'>
                    <div className='icon-layout'>
                       <div className='icon-lyt'>
                        <img src={item.image} alt={item.title}/>
                       </div>
                    </div>
                    <div className='info-layout'>
                        <p><strong>{item.title}</strong></p>
                        <p>{item.text}</p>
                    </div>

                </div>
            )
        })}
    </div>
    <div className='slider'>
        <h3>Slider</h3>
    </div>
    </div>
  )
}

export default Advertisers
