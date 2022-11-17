import './App.css';
import { useState } from 'react';

const cardImages = [
  {"src": "/img/frog.jpg"},
  {"src": "/img/ronaldo.jpg"},
  {"src": "/img/ronaldinho.jpg"},
  {"src": "/img/raccoon.jpg"}
]

function App() {

  const [cards,setCards] = useState([])
  const [turns,setTurns] = useState(0)


const shuffleCards = () => {
  const shuffledCards = [...cardImages, ...cardImages]
  .sort(() => Math.random() - 0.5)
  .map((card) => ({...card, id: Math.random()}))

  setCards(shuffledCards)
  setTurns(0)

  
}


console.log(cards, turns)










  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <button onClick={shuffleCards}>Start Game</button>
      <div className="card-grid" >
        {cards.map(card=> (
          <div className="card" key={card.id}>
            <div> 
              <img className = "front" src={card.src} alt="card front"/>
              <img className = "back" src="/img/cover.jpg" alt="card back"/>

          </div>
          </div>
        ))}
      </div>
    </div>


  );
}

export default App;
