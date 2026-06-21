import React, { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import { getWeather, getWeatherByCoords } from './services/weatherApi'
import Loader from './components/Loader'
import Forecast from './components/Forecast'

const App = () => {

    const [weather, setWeather] = useState(null)
    const [temperatureUnit, setTemperatureUnit] = useState('C');
    const [forecast, setForecast] = useState([]);

    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('');

    function formattedData(data) {
        return {
            temp_c: data.current.temp_c,
            temp_f: data.current.temp_f,
            condition: data.current.condition.text,
            feelsLike_c: data.current.feelslike_c,
            feelsLike_f: data.current.feelslike_f,
            lastUpdatedDate: new Date(data.current.last_updated).toLocaleDateString("en-GB", {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            }),
            lastUpdatedTime: new Date(data.current.last_updated).toLocaleTimeString("en-US", {
                hour: 'numeric',
                hour12: true,
                minute: '2-digit'
            }),
            weatherIcon: `https:${data.current.condition.icon}`,
            time: new Date().toLocaleTimeString("en-US", {
                hour: 'numeric',
                hour12: true,
                minute: '2-digit'
            }),
            date: new Date().toLocaleDateString("en-GB", {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            }),
            day: new Date().toLocaleDateString("en-US", {
                weekday: "long"
            }),
            location: `${data.location.name} - ${data.location.country}`,
        }
    }

    function getCurrentLocation() {
        navigator.geolocation.getCurrentPosition(
            async (position) => {

                try {
                    setError('')
                    setLoading(true)
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    const data = await getWeatherByCoords(lat, lon)

                    setWeather(formattedData(data))
                    setForecast(data.forecast.forecastday)
                }
                catch (error) {
                    setError(error.message)
                }
                finally {
                    setLoading(false)
                    setCity('')
                }


            },
            (error) => {

                switch (error.code) {

                    case error.PERMISSION_DENIED:
                        setError('Location access denied. Search for a city instead.');
                        break;

                    case error.POSITION_UNAVAILABLE:
                        setError('Location information unavailable.');
                        break;

                    case error.TIMEOUT:
                        setError('Location request timed out.');
                        break;

                    default:
                        setError('Unable to get your location.');
                }

                setLoading(false);
            }
        );
    }



    async function handleSearch() {
        if (!city) return

        try {
            setError('')
            setLoading(true)
            const data = await getWeather(city)

            setWeather(formattedData(data))
            console.log(data.forecast.forecastday);
            setForecast(data.forecast.forecastday)
            // console.log(forecast)


        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
            setCity('')
        }
    }

    useEffect(() => {
        getCurrentLocation();
    }, [])




    return (
        <>
            <div className="navbar">
                <h1>AtmosReact</h1>
                <div className="search">
                    <input type="search" placeholder="Search City..." value={city} onChange={(e) => { setCity(e.target.value) }} onKeyDown={(e) => { if (e.key === 'Enter') { handleSearch() } }} />
                    <button className="searchBtn" onClick={handleSearch} >Search</button>
                </div>
            </div>


            <div className="temperature-container">


                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <WeatherCard data={weather} temperatureUnit={temperatureUnit} setTemperatureUnit={setTemperatureUnit} />
                        <div className="forecast-container">
                            {

                                forecast.map((val) => {
                                    return <Forecast key={val.date} data={val} temperatureUnit={temperatureUnit} />
                                })

                            }
                        </div>


                    </>
                )

                }


            </div>


            {error && <p>{error}</p>}

        </>
    )
}

export default App