import axios from 'axios'
import { useEffect, useState } from 'react'
import Weather from './Weather'

function App() {
  const API_KEY = '6075e024525fd4f87f49d608604364a2'

  const [city, setCity] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    async function getWeather() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric`
        )
        setCity(response.data)
        //console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getWeather()
  }, [name])

  const changeInput = (e) => {
    setName(e.target.value)
    //console.log(e.target.value)
  }

  return (
    <div className=' flex justify-center items-center w-full flex-col my-16 text-center'>
      <input
        onChange={changeInput}
        type='text'
        className='border-4 p-4 bg-orange-300 rounded-full w-4/5 mb-8'
        placeholder='Enter city name'
      />
      <Weather cityWeather={city} />
    </div>
  )
}

export default App
