import React from 'react'
import './forecast.css'
const Forecast = ({data, temperatureUnit, setTemperatureUnit}) => {

    const day = new Date(data.date).toLocaleDateString('en-US', {
        weekday: 'long'
    }) 

    return (
        <div className='forecast-card'>
            <div className="first-row">
                <div className="condition">
                    <div className="condition-icon-text">
                        <p className='text'>{data.day.condition.text}</p>
                        <img className='icon' src={`https:${data.day.condition.icon}`} alt={data.day.condition.text} />
                    </div>
                    <div className="day-date">
                        <p className='day'>{day}</p>
                        <p className='date'>{data.date}</p>
                    </div>
                </div>
            </div>
            <div className="second-row">
                <p className='temperature'>{temperatureUnit === 'C'? `${data.day.mintemp_c}°C/${data.day.maxtemp_c}°C` : `${data.day.mintemp_f}°F/${data.day.maxtemp_f}°F`}</p>
                <p className='rain'>Rain {data.day.daily_chance_of_rain}%</p>
            </div>
        </div>
    )
}

export default Forecast