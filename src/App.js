import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./Components/SingleCard";

const cardImages = [
  { "src": "/images/helmet-1.png" ,matched:false},
  { "src": "/images/potion-1.png" ,matched:false},
  { "src": "/images/ring-1.png" ,matched:false},
  { "src": "/images/scroll-1.png" ,matched:false},
  { "src": "/images/shield-1.png",matched:false },
  { "src": "/images/sword-1.png",matched:false },
];


function App() {

  // useStates 

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choise1 , setChoise1]=useState(null)
  const [choise2, setChoise2]= useState(null)
  const [disabled , setDisabled] = useState(false)
  
  
  // Shuffle Cards
 
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(()=> Math.random() -0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
    };
  
    //Handle  Card Choise 

    const handleChoise =(card)=>{
      choise1 ? setChoise2(card) : setChoise1(card)
    }

    // compare Cards
    useEffect(()=>{
      if(choise1 && choise2){
         setDisabled(true)
        if(choise1.src === choise2.src){
          setCards(prevCards=>{
            return prevCards.map(card=>{
              if(card.src === choise1.src){
                return {...card, matched:true}
              }
              else{
                return card
              }
            })
          })
        console.log('Correct choise')
        resetTurn()
        }
        else{
          console.log('cards dont match')
          setTimeout(()=>resetTurn(),1000)
        }
       
      }
      
    }, [choise1 , choise2])
  
      useEffect(()=>{
        shuffleCards()
        setChoise1(null)
        setChoise2(null)
      },[])

    
    // reset Turns 
    const resetTurn = ()=>{
      setChoise1(null)
      setChoise2(null)
      setTurns(prevTurns=>prevTurns+1)
      setDisabled(false)
    }
  return (
    <div className="App">
      <h1>Magic Match </h1>
     
      <button onClick={shuffleCards}>New Game </button>

      <div className="card-grid">
        {cards.map((card) => (
        <SingleCard
          key={card.id}
          card={card} 
          turns={turns}
          handleChoise={handleChoise}
          flipped = {card=== choise1 || card === choise2 || card.matched}
          disabled = {disabled}
        /> 
        
        ))}
       
      </div>
     
      <p style={{textAlign:"center"}}> Truns: {turns}</p> 
    </div>
  );
}

export default App;
