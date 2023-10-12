import { ForecastResponse } from "../weather";

async function getData(location: string): Promise<ForecastResponse> {
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=no&alerts=no`;
    const response = await fetch(url);
    // Recommendation: handle errors
    if (!response.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return await response.json();
}

export { getData };
