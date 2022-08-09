import React from 'react'
import { useGlobalContext } from '../context.js'
import featOne from '../images/illustration-features-tab-1.png';
import featTwo from '../images/illustration-features-tab-2.png';
import featThree from '../images/illustration-features-tab-3.png';
const Features = () => {
  const { value, setValue, features, title,info } = useGlobalContext()
  
  return (
    <div className="features">
      <h2>features</h2>
      <p> Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
      <div className="tabs">
        {
          features.map((item,index) => {
            return (
              <button  key={item.id} onClick={() => setValue(index)}
                className={`tab ${index === value && "active"}`}>
                {item.feature}
              </button>
              )
            })
        }
      </div>
      <div className="feat">
        <div className="img">
          <img src={value === 0 ? featOne : value === 1 ? featTwo : featThree} alt="feature" />
        </div>
        <div className="feat-info">
          <h3 className="title">{title}</h3>
          <p>{info}</p>
          <button className="btn blue">more info</button>
        </div>
      </div>
    </div>
  )
}

export default Features