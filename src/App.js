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

  // fisher-yates
  const shuffleChars = (charArray) => {
    let currentIndex = charArray.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [charArray[currentIndex], charArray[randomIndex]] = [
        charArray[randomIndex], charArray[currentIndex]];
    }
  
    return charArray;
  }

  return (
    <div>
      <div className="Header App">
        <Header currentScore={currentScore} bestScore={bestScore}/>
      </div>
      <div className="Body App">
        {shuffleChars(charData).map((character) => {
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
