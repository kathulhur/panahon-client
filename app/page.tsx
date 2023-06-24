import { WeatherDashboard } from "./_components/weatherdashboard";

async function getData() {
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    const apiKey = process.env.WEATHER_API_KEY
    const url = `http://panahon.onrender.com/api/weather/forecast/3/${'manila'}?key=${apiKey}`
    const response = await fetch(url)
   
    // Recommendation: handle errors
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return response.json()
  }


export default async function Page() {
    let data
    try {
        const responseData = await getData()
        data = responseData.data
    } catch {
        return (
            <h1>Something went wrong. The weather API is likely down.</h1>
        )
    }
    return (
        <WeatherDashboard
            data={data}
            maxWidth={'2xl'}
            marginX={'auto'}
            marginTop={'16'}
        />
    )
}