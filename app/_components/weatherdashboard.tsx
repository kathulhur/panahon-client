'use client'
import { useState } from "react"
import { WeatherAPIResponseObject } from "../../src/types"
import { Box, BoxProps, Stack, Text } from "@chakra-ui/react"
import WeatherCard from "./weathercard"
import { UnitOfMeasureContextProvider } from "./unitOfMeasureContext"
import WeatherWidget from "./weatherwidget"

export interface WeatherDashboardProps extends BoxProps {
    data: WeatherAPIResponseObject['data']
}

const WeatherDashboard = ({data, ...props}: WeatherDashboardProps) => {
    const [selectedForecastDate, setSelectedForecastDate] = useState<string|null>(data.forecast[0].date)

    const selectedForecast = data.forecast.find((forecast) => forecast.date === selectedForecastDate)
    const matchedLocation = data.location
    return (
        <UnitOfMeasureContextProvider>
            <Box {...props}>
                <WeatherWidget location={matchedLocation} weather={selectedForecast} />
                <Stack direction='row' justifyContent={'center'} marginTop={16}>
                    {data.forecast.map((weather, index) => (
                        <WeatherCard 
                        key={index}
                            weather={weather}
                            isSelected={weather.date === selectedForecastDate}
                            onClick={() => setSelectedForecastDate(weather.date)}
                            />
                            ))}
                </Stack>
            </Box>
        </UnitOfMeasureContextProvider>
    )
}

export { WeatherDashboard }
