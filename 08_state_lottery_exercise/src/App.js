import Lottery from './Lottery.js'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div>
        <Lottery />
        <Lottery title='Main Daily' maxBalls={4} maxNum={20} />
      </div>
    </div>
  )
}

export default App
