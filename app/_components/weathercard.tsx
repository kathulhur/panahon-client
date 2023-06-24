import { Box, BoxProps, Stack, Image, Heading, Text } from "@chakra-ui/react"
import { UnitOfMeasure, type Forecast } from "../../src/types"
import { UnitOfMeasureContext } from "./unitOfMeasureContext";
import { useContext } from "react";

export interface WeatherCardProps extends BoxProps {
    weather: Forecast,
    isSelected: boolean
}

const WeatherCard = ({ weather, isSelected, ...props }: WeatherCardProps) => {
    const date = new Date(weather.date)
    const dayString = date.toLocaleDateString('en-US', {weekday: 'short'});
    const { unitOfMeasure } = useContext(UnitOfMeasureContext)
    return (
        <Box {...props}>
            <Stack 
                direction='row'
                alignItems={'center'}
            >
                <Stack alignItems={'center'}>
                    <Text fontSize={'2xl'} fontWeight={'bold'}>{dayString}</Text>
                    <Image 
                        src={ weather.day.condition.icon } 
                        alt={ weather.day.condition.text } 
                        width={100}
                        height={100}
                    />
                    <Heading
                        as={'h3'}
                        size={'lg'}
                    >
                        { unitOfMeasure === UnitOfMeasure.Celsius ? weather.day.avgTempC : weather.day.avgTempF }
                    </Heading>
                </Stack>
                    
            </Stack>
        </Box>
    )
}

export default WeatherCard
