import React,{useState} from 'react'
import arrow from '../images/icon-arrow.png'

const SingleQuestion = ({ id, title, info }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="question" key={id}>
                <div className="q-header">
                    <h4>{title}</h4>
                    <img src={arrow} alt="im" className={`${open ? "open" : "close"}`} onClick={()=>setOpen(!open)}/>
                </div>
                <p>{open ? info : ""}</p>
        </div>
    )
}

export default SingleQuestion