import './App.css';
import Card from './components/Card';
import { charData } from "./assets/charData";


function App() {
  return (
    <div className="App">
      {charData.map((character) => {
        return <Card key={character.id} imgSrc={character.img} text={character.text} />
      })}
    </div>
  );
}

export default App;
