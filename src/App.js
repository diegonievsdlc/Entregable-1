import './App.css';
import Quotes from './quotes.json'
import { useState } from 'react';

function App() {
  const colors = ["#FF3333", "#52FF33", "#FFFC33", "#33FCFF", "#3346FF", "#FF33EC", "#A709FB"]
  const initialIndex = Math.floor(Math.random() * Quotes.length)
  const [index, indexRambom] = useState(initialIndex)
  const selectIndexRamdom = () => {
    const newIndex = Math.floor(Math.random() * Quotes.length)
    indexRambom(newIndex)
    selectIndexRamdomColor()
  }

  const initialIndexColor = Math.floor(Math.random() * colors.length)
  const [indexColor, indexRambomColor] = useState(initialIndexColor)
  const selectIndexRamdomColor = () => {
    const newIndexColor = Math.floor(Math.random() * colors.length)
    indexRambomColor(newIndexColor)
  }
  
  return (
    <div className="App" style={{backgroundColor: colors[indexColor]}}>
      <div className="card" style={{color: colors[indexColor]}}>
        <div className="phrase">
          <i className='bx bxs-quote-alt-left'></i>
          <h2>{Quotes[index].quote}</h2>
        </div>
        <p>{Quotes[index].author}</p>
        <button style={{backgroundColor: colors[indexColor]}} onClick={selectIndexRamdom}><i className='bx bx-chevron-right'></i></button>
      </div>
    </div>
  );
}

export default App;
