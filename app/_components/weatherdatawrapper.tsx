'use client'
import { useContext, useEffect, useState } from "react";
import { WeatherDashboard } from "./weatherdashboard";
import { WeatherAPIResponseObject } from "../../src/types";
import { LocationContext } from "./LocationContext";

async function getData(location: string) {
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY
    const url = `https://panahon.onrender.com/api/weather/forecast/3/${location}?key=${apiKey}`
    const response = await fetch(url)
   
    // Recommendation: handle errors
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return response.json()
}


export default function PageQueryWrapper(props) {
    const [data, setData] = useState<WeatherAPIResponseObject['data']>()
    const { location } = useContext(LocationContext)

    useEffect(() => {
        (async () => {
            try {
                const responseData = await getData(location)
                setData(responseData.data)
            } catch (error) {
                console.log(error)
            }
        })()

    }, [location])


    return (
        <>
        { data && <WeatherDashboard
                data={data}
                maxWidth={'2xl'}
                marginX={'auto'}
                marginTop={'16'}
                />
        }
        { !data && <h1>Loading...</h1>}
        </>
    )
}