import React from 'react'
import './weatherCard.css'
const WeatherCard = ({ data }) => {
    if (!data) {
        return <p>Search a city to see weather</p>
    }
    return (
        <>
            <div className="temperature-container">
                <div className="temperature-card">
                    <div className="temperature-unit">
                        <button className="celsius">C</button>
                        <button className="fahrenheit">F</button>
                    </div>
                    <div className="temperature-row">
                        <div className="temperature">
                            <p className="current-temperature">{data.temp}° C</p>
                            <p className="condition-text">{data.condition}</p>
                            <p className="feels-like">feels like {data.feelsLike}</p>
                            <p className="last-updated">Last updated {data.lastupdated}</p>
                        </div>
                        <div className="date-time">
                            <p className="time">{data.time}</p>
                            <pre className="date">{data.date}</pre>
                            <p className="location">{data.location}</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherCard