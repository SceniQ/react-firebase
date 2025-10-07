import { useEffect, useState } from 'react';
import './App.css';
import CardGrid from './component/CardGrid';

//array of cards of diff picture sources
const cardImages = [
  {"src": "img/helmet-1.png", matched:false},
  {"src": "img/potion-1.png", matched:false},
  {"src": "img/ring-1.png", matched:false},
  {"src": "img/scroll-1.png", matched:false},
  {"src": "img/shield-1.png", matched:false},
  {"src": "img/sword-1.png", matched:false},
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  

  //handle choice
  const handleChoice = (card)=>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //find matching cards
  useEffect(() =>{
    if(choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        const choiceSource = choiceOne.src
        //match-making logic
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceSource){
              return {...card, matched: true}
            }else{
              return card
            }
          })
        })
      }else{
        console.log("Cards don't match")
      }
      //resetTurns
      setTimeout(() =>resetTurn(),1000)
    }
    
  }, [choiceOne,choiceTwo])

  console.log(cards)

  //reset turns
  const resetTurn = () =>{
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))

    setCards(shuffledCards)
    setTurns(0)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <CardGrid gameCards={cards} handleChoice={handleChoice} choiceOne={choiceOne} choiceTwo={choiceTwo} disabled={disabled}/>
    </div>
  );
}

export default App;