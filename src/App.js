import './App.css';
import { useState, useEffect } from 'react';
import SingleCard from './components/SingleCard'


const cardImages = [
  {"src": "/img/frog.jpg"},
  {"src": "/img/ronaldo.jpg"},
  {"src": "/img/valverde.jpg"},
  {"src": "/img/raccoon.jpg"}
]

function App() {

  const [cards,setCards] = useState([])
  const [turns,setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)


const shuffleCards = () => {
  const shuffledCards = [...cardImages, ...cardImages]
  .sort(() => Math.random() - 0.5)
  .map((card) => ({...card, id: Math.random()}))

  setCards(shuffledCards)
  setTurns(0)

  
}


const handleChoice = (card) => {
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
}


useEffect(() => {
  if (choiceOne && choiceTwo) {
    if(choiceOne.src === choiceTwo.src){
      console.log("those cards match")
      resetTurn()
    } else {
      console.log("those cards do not match")
      resetTurn()
    }
  }
}, [choiceOne, choiceTwo])


const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
}







  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <button onClick={shuffleCards}>Start Game</button>
      <div className="card-grid" >
        {cards.map(card=> (
          <SingleCard key={card.id} card={card} handleChoice = {handleChoice}/>
        ))}
      </div>
    </div>


  );
}

export default App;
