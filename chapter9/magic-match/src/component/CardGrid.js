import '../styles/CardGrid.css'
import SingleCard from './SingleCard'

export default function CardGrid({gameCards, handleChoice}) {
  return (
    <div className="card-grid">
      {gameCards.map((card) => (
        <SingleCard key={card.id} card={card} handleChoice={handleChoice}/>
      ))}
    </div>
  )
}
