import React from 'react'
import Kids from "../../assets/Kids.png"
import Cinema from "../../assets/Cinema.png"
import PopCorn from "../../assets/Pop Corn.png"

const Feature = () => {
  return (
    <div className="Movies__feature">
        <div className="Movies__feature-container">
            <div className="Movies__feature-container-features">
                <div className="Movies__feature-container-kids">
                    <img src={Kids} alt="Kids"/>
                    <div className="Movies__feature-container-text">
                    <h1>Kids Friendly</h1>
                    <p>Located at Addis Ababa, Ethiopia , Century mall 
                    features the best in luxury, contemporary Located at Addis Ababa, Ethiopia , Century mall 
                    features the best in luxury, contemporary features the best in luxury, contemporary</p>
                    </div>
                </div>
                <div className="Movies__feature-container-kids">
                <div className="Movies__feature-container-text">
                    <h1>Kids-friendly</h1>
                    <p>Located at Addis Ababa, Ethiopia , Century mall 
                    features the best in luxury, contemporary Located at Addis Ababa, Ethiopia , Century mall 
                    features the best in luxury, contemporary features the best in luxury, contemporary</p>
                    </div>
                    <img src={PopCorn} alt="Cinema"/>
                   
                </div>
                <div className="Movies__feature-container-kids">
                    <img src={Cinema} alt="Cinema"/>
                    <div className="Movies__feature-container-text">
                    <h1>Kids-friendly</h1>
                    <p>Located at Addis Ababa, Ethiopia , Century mall 
                    features the best in luxur,contemporary Located at Addis Ababa, Ethiopia , Century mall 
                    features the best in luxury, contemporary features the best in luxury, contemporary</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature
