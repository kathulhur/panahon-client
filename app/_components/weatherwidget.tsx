'use client'

import { Box, BoxProps, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { Forecast, Location, UnitOfMeasure } from "../../src/types"
import { UnitOfMeasureContext } from "./unitOfMeasureContext"
import LocationInput from "./LocationInput"

export interface WeatherWidgetProps extends BoxProps {
    weather: Forecast
    location: Location
}


const WeatherWidget = ({ weather, location, ...props }: WeatherWidgetProps) => {
    const { date, day } = weather
    const { dailyWillItRain, dailyChanceOfRain } = day
    const { unitOfMeasure, setUnitOfMeasure } = useContext(UnitOfMeasureContext)
    const [temperature, setTemperature] = useState(day.avgTempC)
    const { name, region, country  } = location
    useEffect(() => {
        if (unitOfMeasure === UnitOfMeasure.Celsius) {
            setTemperature(day.avgTempC)
        } else {
            setTemperature(day.avgTempF)
        }
    }, [unitOfMeasure, weather])


    return (
        <Box {...props}
        >
            <Heading textAlign={'center'}>Ulat Panahon</Heading>
            <Text textAlign={'center'} fontSize={'sm'}>A 3-day weather forecast</Text>
            <LocationInput />

            <Heading
                marginTop={'2rem'}
                marginBottom={'1rem'}
                size={'sm'}
                textAlign={'center'}
            >
                {name}, {region}, {country}
            </Heading>
            <Stack 
                direction='row'
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Image 
                    src={ weather.day.condition.icon } 
                    alt={ weather.day.condition.text } 
                    width={128}
                    height={128}
                />
                <Stack direction='column'>
                    <Stack 
                        direction='row'
                    >
                        <Heading
                            as={'h3'}
                            size={'4xl'}
                        >{ temperature }</Heading>
                        <Stack 
                            direction='row'
                            alignItems={'flex-start'}
                        >
                            <Text
                                as={'button'}
                                {...(unitOfMeasure === UnitOfMeasure.Celsius ? { fontWeight: 'bold' } : {})}
                                onClick={() => setUnitOfMeasure(UnitOfMeasure.Celsius)}
                            >
                                &deg;C
                            </Text>
                            <Text>|</Text>
                            <Text
                                as={'button'}
                                {...(unitOfMeasure === UnitOfMeasure.Fahrenheit ? { fontWeight: 'bold' } : {})}
                                onClick={() => setUnitOfMeasure(UnitOfMeasure.Fahrenheit)}
                            >
                                &deg;F
                            </Text>
                        </Stack>
                    </Stack>
                    <Text fontSize='sm' fontWeight='medium'>Chance of rain: {dailyChanceOfRain}%</Text>
                    <Text fontSize='sm' fontWeight='medium'>Will it rain: {dailyWillItRain == 1 ? "Yes" : "No"}</Text>
                </Stack>
            </Stack>
        </Box>
    )
}

export default WeatherWidget