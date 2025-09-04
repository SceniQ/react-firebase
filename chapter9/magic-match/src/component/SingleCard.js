import '../styles/SingleCard.css'
export default function SingleCard({card, handleChoice}) {
  const handleClick = () =>{
    handleChoice(card)
  }
  return (
    <div className="single-card">
      <div className="card">
            <div>
                <img className="front" src={card.src} alt="card-front" />
                <img style={{cursor:"pointer"}}className="back" src="/img/cover.png" alt="card-back" onClick={handleClick}/>
            </div>
        </div>
    </div>
  )
}
