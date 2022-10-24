import React, { useEffect, useState } from 'react';
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
    } 
    else {
      // clear cardsSelected array, and add first new card
      setCardsSelected([])
      // reset score
      setCurrentScore(0)
    }
  }

  // fisher-yates
  const shuffleChars = (charArray) => {
    let currentIndex = charArray.length,  randomIndex;

    while (currentIndex !== 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [charArray[currentIndex], charArray[randomIndex]] = [
        charArray[randomIndex], charArray[currentIndex]];
    }
  
    return charArray;
  }

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(bestScore + 1)
    }
    return () => {

    }
  }, [currentScore, bestScore])


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
