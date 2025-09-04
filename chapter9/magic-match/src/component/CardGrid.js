import '../styles/CardGrid.css'
import SingleCard from './SingleCard'

export default function CardGrid({gameCards, handleChoice, choiceOne, choiceTwo}) {
  return (
    <div className="card-grid">
      {gameCards.map((card) => (
        <SingleCard key={card.id} card={card} handleChoice={handleChoice}
        flipped={card == choiceOne || card === choiceTwo || card.matched}/>
      ))}
    </div>
  )
}
