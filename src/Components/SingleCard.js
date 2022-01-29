import React from "react";
import '../Components/SingleCard.css'



export default function SingleCard({card, turns,handleChoise }) {

    // Handles 

const handleClick=()=>{
    handleChoise(card)
}


  return (
    <div className="SingleCards">
      
          <div className="card" >
            <div>
              <img className="front-card" src={card.src} alt="front of card" />
              <img
                onClick={handleClick}
                className="back-card"
                src="/images/cover.png"
                alt="back of card"
              />
            </div>
      </div>
      <p> Truns: {turns}</p>
    </div>
  );
}
