import React from 'react';
import { data } from './AboutData';
import "./About.css";

const About = () => {
  return (
    <div className="advetiser-menu">
    <div className="layout">
      {data.map((item) => {
        return (
          <div key={item.id} className="layout-item">
            <div className="icon-layout">
              <div className="icon-lyt">
                <img src={item.image} alt={item.title}/>
              </div>
            </div>
            <div className="info-layout">
              <p>
                <strong>{item.title}</strong>
              </p>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>

  </div>
  )
}

export default About
