const API_KEY = "apiKey"

export async function getWeather(city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error("Failed to fetch weather data")
    }

    const data = await response.json()
    return data
}