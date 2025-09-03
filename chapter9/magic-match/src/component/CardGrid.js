import styles from '../styles/CardGrid.css'

export default function CardGrid({gameCards}) {
  return (
    <div className="card-grid">
      {gameCards.map((card) => (
        <div className="card" key={card.id}>
            <div>
                <img className="front" src={card.src} alt="card-front" />
                <img className="back" src="/img/cover.png" alt="card-back" />
            </div>
        </div>
      ))}
    </div>
  )
}
