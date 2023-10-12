"use client";
import { useContext, useEffect, useState } from "react";
import { ForecastResponse } from "../../src/weather";
import { Box, BoxProps, Stack, Text } from "@chakra-ui/react";
import WeatherCard from "./weathercard";
import { UnitOfMeasureContextProvider } from "./unitOfMeasureContext";
import WeatherWidget from "./weatherwidget";
import { LocationContext } from "./LocationContext";
import { getData } from "../../src/lib/weather";

export interface WeatherDashboardProps extends BoxProps {
    data: ForecastResponse;
}

const WeatherDashboard = ({ data, ...props }: WeatherDashboardProps) => {
    const [forecast, setForecast] = useState(data);
    const [selectedForecastDate, setSelectedForecastDate] =
        useState<Date | null>(forecast.forecast.forecastday[0].date);

    const selectedForecast = forecast.forecast.forecastday.find(
        (forecast) => forecast.date === selectedForecastDate
    );

    const { location } = useContext(LocationContext);

    useEffect(() => {
        async function getForecast() {
            if (!location) return;
            try {
                const response = await getData(location);
                setForecast(response);
            } catch (err) {
                alert("Invalid Input. Please try a different one.");
            }
        }
        getForecast();
    }, [location]);

    return (
        <UnitOfMeasureContextProvider>
            <Box {...props}>
                <WeatherWidget
                    location={forecast.location}
                    forecast={selectedForecast}
                />
                <Stack direction="row" justifyContent={"center"} marginTop={16}>
                    {forecast.forecast.forecastday.map((forecastday, index) => (
                        <WeatherCard
                            key={index}
                            forecastday={forecastday}
                            isSelected={
                                forecastday.date === selectedForecastDate
                            }
                            onClick={() =>
                                setSelectedForecastDate(forecastday.date)
                            }
                        />
                    ))}
                </Stack>
            </Box>
        </UnitOfMeasureContextProvider>
    );
};

export { WeatherDashboard };
