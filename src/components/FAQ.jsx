import React from 'react'
import questions from '../data/faqs'
import SingleQuestion from './SingleQuestion'
const FAQ = () => {
  
  return (
    <div className="faqs">
      <div className="faqs-container">
        <h2>Frequently Asked Questions</h2>
        <p> Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
        <div className="questions">

        {
          questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}/>
            )
          })
        }
        </div>
        <button className="btn blue">More Info</button>
      </div>
    </div>
  )
}

export default FAQ