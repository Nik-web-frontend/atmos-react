const API_KEY =  import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeather(city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error("Failed to fetch weather data")
    }

    const data = await response.json()
    return data
}

export async function getWeatherByCoords(lat, lon) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}`

    const response = await fetch(url)
    const data = response.json();
    return data;

}