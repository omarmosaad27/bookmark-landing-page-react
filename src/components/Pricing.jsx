import React from 'react'
import chrome from '../images/logo-chrome.png'
import firefox from '../images/logo-firefox.png'
import opera from '../images/logo-opera.png'
const Pricing = () => {
  return (
    <div className="pricing">
      <h2>Download the extension</h2>
      <p> We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
      <div className="extensions">
        <div className="extension">
          <img src={chrome} alt="ex" />
          <h4>Add To Chrome</h4>
          <p>Minimum version 62</p>
          <button className="btn blue">Add & Install Extension</button>
        </div>
        <div className="extension">
          <img src={firefox} alt="ex" />
          <h4>Add To Firefox</h4>
          <p>Minimum version 55</p>
          <button className="btn blue">Add & Install Extension</button>
        </div>
        <div className="extension">
          <img src={opera} alt="ex" />
          <h4>Add To opera</h4>
          <p>Minimum version 46</p>
          <button className="btn blue">Add & Install Extension</button>
        </div>
      </div>
    </div>
  )
}

export default Pricing