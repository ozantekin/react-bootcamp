import './App.css'
import Game from './Game'
import Game2 from './Game2'
import Random from './Random'
import Button from './Button'
import Click from './Click'
import AlternativeClick from './AlternativeClick'

function App() {
  return (
    <div className='App'>
      <Game />
      <Game2 />
      <Random maxLucky={9} />
      <Button />
      <Click />
      <AlternativeClick />
    </div>
  )
}

export default App
