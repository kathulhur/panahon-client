"use client";

import { WeatherForecast } from "@/src/components/WeatherForecast/WeatherForecast";
import { getData } from "@/src/lib/weather";
import { ForecastResponse } from "@/src/weather";
import {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { LocationContext } from "./_components/LocationContext";

export const WeatherForecastContext = createContext<{
    selectedForecastDayIndex: number;
    setSelectedForecastDayIndex: Dispatch<SetStateAction<number>>;
    forecastData: ForecastResponse;
}>(null);

export const Wrapper = ({ data }: { data: ForecastResponse }) => {
    const [selectedForecastDayIndex, setSelectedForecastDayIndex] = useState(0);
    const [forecastData, setForecastData] = useState(data);
    const { location } = useContext(LocationContext);
    useEffect(() => {
        if (!location) return;
        async function getForecast() {
            const response = await getData(location);
            setForecastData(response);
        }
        getForecast();
    }, [location]);

    return (
        <WeatherForecastContext.Provider
            value={{
                selectedForecastDayIndex,
                setSelectedForecastDayIndex,
                forecastData: forecastData,
            }}
        >
            <WeatherForecast />
        </WeatherForecastContext.Provider>
    );
};
