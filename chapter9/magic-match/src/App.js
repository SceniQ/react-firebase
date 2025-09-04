import { useEffect, useState } from 'react';
import './App.css';
import CardGrid from './component/CardGrid';

//array of cards of diff picture sources
const cardImages = [
  {"src": "img/helmet-1.png"},
  {"src": "img/potion-1.png"},
  {"src": "img/ring-1.png"},
  {"src": "img/scroll-1.png"},
  {"src": "img/shield-1.png"},
  {"src": "img/sword-1.png"},
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  

  //handle choice
  const handleChoice = (card)=>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //find matching cards
  useEffect(() =>{
    if(choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        //match-making logic
        console.log("Cards match!")
      }else{
        console.log("Cards don't match")
      }
      //resetTurns
      resetTurn()
    }
    
  }, [choiceOne,choiceTwo])

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
      <CardGrid gameCards={cards} handleChoice={handleChoice}/>
    </div>
  );
}

export default App;