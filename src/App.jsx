import { useState } from 'react';
import Nav from './Components/Nav';
import Weather from './Components/Weather';


function App() {
  const [temp, setTemp] = useState('')
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState('')
  const [emoji, setEmoji] = useState('')
  const [date, setDate] = useState('')

  const [country, setCountry] = useState('')

  const fetchData = async (target) => {
    try {
      const url = `https://api.weatherapi.com/v1/current.json?key=6466ef1d5977462da73131642232712&q=${target}`

      const response = await fetch(url);
      const data = await response.json()

      // destructuring
      const {
        current: { temp_c, condition: {
          text, icon
        } },
        location: { name, localtime, country }
      } = data;

      setTemp(temp_c)
      setCity(`${name} `)
      setDate(`${localtime.split(' ')[1]} ${localtime.split(" ")[0]}`)
      setWeather(text)
      setEmoji(icon)

      setCountry(country)

    } catch (error) {
      alert("Location not found")
    }

  }

  return (
    <>
      <Weather temp={temp} city={city} country={country} date={date} emoji={emoji} weather={weather} />
      <Nav fetchData={fetchData} />
    </>
  )
}

export default App
