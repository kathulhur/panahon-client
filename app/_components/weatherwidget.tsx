"use client";

import { Box, BoxProps, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Forecastday, Location, UnitOfMeasure } from "../../src/weather";
import { UnitOfMeasureContext } from "./unitOfMeasureContext";
import LocationInput from "./LocationInput";

export interface WeatherWidgetProps extends BoxProps {
    forecast: Forecastday;
    location: Location;
}

const WeatherWidget = ({
    forecast,
    location,
    ...props
}: WeatherWidgetProps) => {
    const { date, day } = forecast;
    const { daily_will_it_rain, daily_chance_of_rain } = day;
    const { unitOfMeasure, setUnitOfMeasure } =
        useContext(UnitOfMeasureContext);
    const [temperature, setTemperature] = useState(day.avgtemp_c);
    const { name, region, country } = location;
    useEffect(() => {
        if (unitOfMeasure === UnitOfMeasure.Celsius) {
            setTemperature(day.avgtemp_c);
        } else {
            setTemperature(day.avgtemp_f);
        }
    }, [unitOfMeasure, forecast]);

    return (
        <Box {...props}>
            <Heading textAlign={"center"}>Ulat Panahon</Heading>
            <Text textAlign={"center"} fontSize={"sm"}>
                A 3-day weather forecast
            </Text>
            <LocationInput />

            <Heading
                marginTop={"2rem"}
                marginBottom={"1rem"}
                size={"sm"}
                textAlign={"center"}
            >
                {name}, {region}, {country}
            </Heading>
            <Stack
                direction="row"
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Image
                    src={forecast.day.condition.icon}
                    alt={forecast.day.condition.text}
                    width={128}
                    height={128}
                />
                <Stack direction="column">
                    <Stack direction="row">
                        <Heading as={"h3"} size={"4xl"}>
                            {temperature}
                        </Heading>
                        <Stack direction="row" alignItems={"flex-start"}>
                            <Text
                                as={"button"}
                                {...(unitOfMeasure === UnitOfMeasure.Celsius
                                    ? { fontWeight: "bold" }
                                    : {})}
                                onClick={() =>
                                    setUnitOfMeasure(UnitOfMeasure.Celsius)
                                }
                            >
                                &deg;C
                            </Text>
                            <Text>|</Text>
                            <Text
                                as={"button"}
                                {...(unitOfMeasure === UnitOfMeasure.Fahrenheit
                                    ? { fontWeight: "bold" }
                                    : {})}
                                onClick={() =>
                                    setUnitOfMeasure(UnitOfMeasure.Fahrenheit)
                                }
                            >
                                &deg;F
                            </Text>
                        </Stack>
                    </Stack>
                    <Text fontSize="sm" fontWeight="medium">
                        Chance of rain: {daily_chance_of_rain}
                        {"%"}
                    </Text>
                </Stack>
            </Stack>
        </Box>
    );
};

export default WeatherWidget;
