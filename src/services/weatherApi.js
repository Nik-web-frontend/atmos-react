const API_KEY =  import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeather(city) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=yes`

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error("Failed to fetch weather data")
    }

    const data = await response.json()
    return data
}

export async function getWeatherByCoords(lat, lon) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=3&aqi=yes`

    const response = await fetch(url)

    if(!response.ok) {
        throw new Error('Failed to fetch weather data')
    }
    const data = response.json();
    return data;

}