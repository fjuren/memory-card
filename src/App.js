import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header'
import { charData } from "./assets/charData";


function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const addScore = () => {
    setCurrentScore(currentScore + 1)
  }

  return (
    <div>
      <div className="Header App">
        <Header currentScore={currentScore} bestScore={bestScore}/>
      </div>
      <div className="Body App">
        {charData.map((character) => {
          return (
            <div key={character.id}>
              <Card key={character.id} imgSrc={character.img} text={character.text} cardClicked={addScore}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
