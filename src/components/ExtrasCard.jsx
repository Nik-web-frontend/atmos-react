import React, { useEffect } from 'react'
import './extrasCard.css'


import { FaDroplet } from "react-icons/fa6";
import { WiDust, WiStrongWind } from "react-icons/wi";
import { BsDropletHalf } from "react-icons/bs";
import { MdGrain, MdOutlineWbSunny } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { BsThermometerHigh } from "react-icons/bs";
import { CiTempHigh } from "react-icons/ci";
import { BsThermometer } from "react-icons/bs";

import Loader from './Loader';
import CardContent from './CardContent';

const ExtrasCard = ({ data }) => {

    if (!data) return null;

    let extrasDataOne = [

        {
            title: 'humidity',
            value: `${data.current.humidity}%`,
            icon: FaDroplet
        },
        {
            title: 'AQI',
            value: data.current.air_quality["us-epa-index"],
            icon: MdGrain,
        },
        {
            title: 'precipitation',
            value: `${data.current.precip_mm}%`,
            icon: BsDropletHalf
        }
    ]

    let extrasDataTwo = [
        {
            title: 'Wind',
            value: `${data.current.wind_kph} Kph`,
            icon: WiStrongWind
        },
        {
            title: 'UV',
            value: data.current.uv,
            icon: MdOutlineWbSunny
        },
        {
            title: 'Wind Direction',
            value: data.current.wind_dir,
            icon: CiLocationArrow1
        }
    ]

    let sunRiseNSet = [
        {
            title: 'Sunrise',
            value: data.forecast.forecastday[0].astro.sunrise,
            icon: WiSunrise
        },
        {
            title: 'Sunset',
            value: data.forecast.forecastday[0].astro.sunset,
            icon: WiSunset
        }
    ]

    let tempHighNLow = [
        {
            title: 'High',
            value: `${data.forecast.forecastday[0].day.maxtemp_c}°C`,
            icon: BsThermometerHigh

        },
        {
            title: 'low',
            value: `${data.forecast.forecastday[0].day.mintemp_c}°C`,
            icon: BsThermometer

        }

    ]


    return (
        <>
            <div className="extras-container">
                <div className="one">
                    <div className="section-one">
                        {
                            extrasDataOne.map(val => <CardContent key={val.title} data={val} />)
                        }
                    </div>
                    <hr />
                    <div className="section-two">
                        {
                            extrasDataTwo.map(val => <CardContent key={val.title} data={val} />)
                        }
                    </div>
                </div>
                <div className="two">
                    <div className="card-two">
                        <div className="part-one">
                            {
                                sunRiseNSet.map((data) => {
                                    return <CardContent key={data.title} data={data} />
                                })
                            }
                        </div>
                        <hr />
                        <div className="part-two">
                            {
                                tempHighNLow.map((data) => {
                                    return <CardContent key={data.title} data={data} />
                                })
                            }
                        </div>
                    </div>
                    <div className="card-three">

                    </div>
                </div>
            </div>
        </>
    )
}

export default ExtrasCard