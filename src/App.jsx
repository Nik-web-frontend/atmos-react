import React, { useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import { getWeather } from './services/weatherApi'

const App = () => {

    const [weather, setWeather] = useState(null)

    const [city, setCity] = useState('');

    async function handleSearch() {
        if (!city) return

        try {
            const data = await getWeather(city)

            const formatted = {
                temp: data.current.temp_c,
                condition: data.current.condition.text,
                feelsLike: data.current.feelslike_c,
                lastUpdated: data.current.last_updated,
                time: new Date().toLocaleTimeString("en-US", {
                    hour: 'numeric',
                    hour12: true,
                    minute: '2-digit'
                }),
                date: new Date().toDateString(),
                location: data.location.name + " - " + data.location.country
            }

            setWeather(formatted)

        } catch (error) {
            console.log(error.message)
        }
    }



return (
    <>
        <div className="navbar">
            <h1>AtmosJS</h1>
            <div className="search">
                <input type="search" placeholder="Search City..." value={city} onChange={(e) => { setCity(e.target.value) }} />
                <button className="searchBtn" onClick={handleSearch} >Search</button>
            </div>
        </div>

        <WeatherCard data={weather} />

    </>
)
}

export default App