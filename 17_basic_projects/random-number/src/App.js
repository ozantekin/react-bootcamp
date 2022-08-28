import React, { useState } from 'react'
import './App.css'

function App() {
  const [min, setMin] = useState()
  const [max, setMax] = useState()
  const [random, setRandom] = useState()

  const generateRandom = () => {
    setRandom(Math.floor(Math.random() * (max - min + 1) + min))
  }

  const changeMax = (e) => {
    setMax(Number(e.target.value))
  }

  const changeMin = (e) => {
    setMin(Number(e.target.value))
  }

  return (
    <div className='App'>
      <h1>Random Number</h1>
      <div className='container'>
        <p> Random Number: {random} </p>
        <input
          type='number'
          placeholder='Enter a min number'
          value={min}
          onChange={changeMin}
        />
        <input
          type='number'
          placeholder='Enter a max number'
          value={max}
          onChange={changeMax}
        />
        <button onClick={generateRandom}>Give a Random Number</button>
      </div>
    </div>
  )
}

export default App
