import '../styles/CardGrid.css'
import SingleCard from './SingleCard'

export default function CardGrid({gameCards}) {
  return (
    <div className="card-grid">
      {gameCards.map((card) => (
        <SingleCard key={card.id} card={card}/>
      ))}
    </div>
  )
}
