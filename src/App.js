import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header'
import { charData } from "./assets/charData";


function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [cardsSelected, setCardsSelected] = useState([])

  const addScore = (selectedCard) => {
    if (!cardsSelected.includes(selectedCard)) {
      setCurrentScore(currentScore + 1)
      setCardsSelected(cardsSelected.concat(selectedCard))
      if (currentScore === bestScore) {
        setBestScore(bestScore + 1)
      }
    } 
    else {
      // clear cardsSelected array, and add first new card
      setCardsSelected([].concat(selectedCard))
      // reset score
      setCurrentScore(1)
    }
  }

  // shuffle cards is next

  return (
    <div>
      <div className="Header App">
        <Header currentScore={currentScore} bestScore={bestScore}/>
      </div>
      <div className="Body App">
        {charData.map((character) => {
          return (
            <div key={character.id}>
              <Card key={character.id} imgSrc={character.img} text={character.text} cardClicked={(selectedCard) => addScore(selectedCard)}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
