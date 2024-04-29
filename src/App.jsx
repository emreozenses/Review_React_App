import React from "react";
import reviews from "./data";
import { useState } from "react";
import { BiChevronRight } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';
import { MdFormatQuote } from 'react-icons/md';

const App = () => {

const [review,setReview] = useState(reviews[0]);
const handlePrev = ()=>{};
const handleNext =()=>{
};

  return (
    <main>
      <div className="review">
        <div className="img-container">
                   
          <img src={review.image} className="person-img" />
          <MdFormatQuote className="quote-icon" />
        </div>
        <h3 className="author">{review.name}</h3>
        <h8 className="job">{review.job}</h8>
        <p className="info">{review.text}</p>
        
        <div className="btn-container">
          <BiChevronLeft className="prev-btn" onClick={handlePrev()}/>
          <BiChevronRight className="next-btn" onClick={handleNext()}/>
        </div>
      </div>
    </main>
  )};
export default App;
