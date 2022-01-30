import React from "react";
import '../Components/SingleCard.css'



export default function SingleCard({card, turns,handleChoise , flipped ,disabled}) {

    // Handles 

const handleClick=()=>{
  if(!disabled){
    handleChoise(card)
  }
}


  return (
    <div className="SingleCards">
      
          <div className="card" >
            <div className={flipped ? "fliped":""}>
            <img className="front-card" src={card.src} alt="front of card" />
              <img
                onClick={handleClick}
                className="back-card"
                src="/images/cover.png"
                alt="back of card"
              />
            </div>
      </div>
    </div>
  );
}
