import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const decrase = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const increase = () => {
    setCount(count + 1)
  }

  return (
    <div className='App'>
      <h1>Counter App</h1>
      <div className='container'>
        <button onClick={decrase}> - </button>
        <span> {count} </span>
        <button onClick={increase}> + </button>
        {count === 5 ? (
          <small>Bingo !!! You found the lucky number</small>
        ) : null}
      </div>
    </div>
  )
}

export default App
