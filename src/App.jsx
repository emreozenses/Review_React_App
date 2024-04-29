import React from "react";
import reviews from "./data";
import { useState } from "react";
import { BiChevronRight } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';
import { MdFormatQuote } from 'react-icons/md';

const App = () => {

const [index,setIndex] = useState(0);
const {image,job,text,name} = reviews[index];

const handlePrev = ()=>{
  setIndex(index - 1)
  if (index === 0) {
    setIndex(reviews.length - 1)
  }

  /* setIndex((currentIndex)=>{
      const newIndex = (currentIndex-1+reviews.lenght)%reviews.length;
      return newIndex;
      }) */

  /* setIndex((currentIndex)=>{
      const newIndex = currentIndex+1;
      if(newIndex<0){
        return reviews.length-1;
      }
  }) */
};
const handleNext =()=>{
  setIndex(index + 1)
  if (index === reviews.length - 1) {
    setIndex(0)
  }

  /* setIndex((currentIndex)=>{
      const newIndex = (currentIndex+1)%reviews.length;
      return newIndex;
      }) */

  /* setIndex((currentIndex)=>{
      const newIndex = currentIndex+1;
      if(newIndex>reviews.length-1){
        return 0;
      }
  }) */
};
const handleRandom=()=>{
  const randomNumber = Math.round(Math.random()*(reviews.length-1));
    setIndex(randomNumber);
   console.log(randomNumber);
}

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} className="person-img" />
          <span className="quote-icon">
            <MdFormatQuote />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
      <div className="btn-container">
        <BiChevronLeft className="prev-btn" onClick={handlePrev} />
        <BiChevronRight className="next-btn" onClick={handleNext} />
      </div>
      <button type="button" onClick={handleRandom} className="btn btn-hipster">
        Surprise Me
      </button>
      </article>

    </main>
  )};
export default App;
