import React, { useState } from 'react'
import './weatherCard.css'
const WeatherCard = ({ data, temperatureUnit, setTemperatureUnit}) => {

    if (!data) {
        return <div className="defaultMsg-container">
            <p className='defaultMsg'>Allow location access or search for a city.</p>
        </div>
    }
    return (
        <>

            <div className="temperature-card">
                <div className="temperature-unit">
                    <button className={`celsius ${temperatureUnit === 'C' ? 'active-unit' : ''}`} onClick={() => { setTemperatureUnit('C') }}>C</button>
                    <button className={`fahrenheit ${temperatureUnit === 'F' ? 'active-unit' : ''}`} onClick={() => { setTemperatureUnit('F') }}>F</button>
                </div>
                <div className="temperature-row">
                    <div className="temperature">
                        <p className='current-temperature'>{temperatureUnit === 'C' ? `${data.temp_c}°C` : `${data.temp_f}°F`}</p>
                        <p className="condition-text">{data.condition}
                            <img src={data.weatherIcon} alt={`${data.condition}`} />
                        </p>
                        <p className="feels-like">feels like {temperatureUnit === 'C' ? `${data.feelsLike_c}° C` : `${data.feelsLike_f}° F`}</p>
                        <p className="last-updated">Last updated {data.lastUpdated}</p>
                    </div>
                    <div className="date-time">
                        <p className="time">{data.time}</p>
                        <pre className="date">{data.date}</pre>
                        <p className="location">{data.location}</p>

                    </div>
                </div>
            </div>

        </>
    )
}

export default WeatherCard