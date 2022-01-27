import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "/images/helmet-1.png" },
  // { src: "/images/cover-1.png" }, 
  { src: "/images/potion-1.png" },
  { src: "/images/ring-1.png" },
  { src: "/images/scroll-1.png" },
  { src: "/images/shield-1.png" },
  { src: "/images/sword-1.png" },
];
function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  // Shuffle Cards

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages , ...cardImages].sort(() => Math.random() * -0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };
 

  return (
    <div className="App">
      <h1>Magic Match </h1>
      <button onClick={shuffleCards}>New Game </button>

      <div className="card-grid">
        {cards.map(card => (
          <div className="card" key={card.id}>
            <div>
              <img className="front-card" src={card.src} alt="front of card" />
              <img
                className="back-card"
                src="/images/cover.png"
                alt="back of card"
              />
            </div>
          </div>
        ))}
      </div>
      <p> Truns: {turns}</p>
    </div>
  );
}

export default App;
