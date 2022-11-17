import './SingleCard.css'

export default function SingleCard({card, handleChoice}){

    const handleClick = () => {
        handleChoice(card)
    }



    return (
        <div>
            <div className="card">
            <div> 
              <img className = "front" src={card.src} alt="card front"/>
              <img 
              className = "back" 
              src="/img/cover.jpg" 
              onClick={handleClick} 
              alt="card back"/>
          </div>
          </div>
        </div>
    )
}