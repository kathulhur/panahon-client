import { useContext } from "react";
import { Card } from "../Card/Card";
import { ForecastDetail } from "../ForecastDetail/ForecastDetail";
import { LocationInput } from "../LocationInput/LocationInput";
import { UnitOfMeasureContext } from "app/_components/unitOfMeasureContext";
import { WeatherForecastContext } from "app/Wrapper";
import { UnitOfMeasure } from "@/src/weather";
import { ForecastSnippet } from "../ForecastSnippet/ForecastSnippet";
const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const WeatherForecast = () => {
    const { unitOfMeasure } = useContext(UnitOfMeasureContext);
    const { selectedForecastDayIndex, forecastData } = useContext(
        WeatherForecastContext
    );

    const selectedForecastDay =
        forecastData.forecast.forecastday[selectedForecastDayIndex];
    return (
        <div className="my-16">
            <Card>
                <Card.Heading
                    title="Panahon"
                    description="A 3-day weather forecast"
                    className="text-center"
                />
                <Card.Content>
                    <LocationInput className=" max-w-sm mx-auto" />
                    <div className="text-center mt-4">
                        <h2 className="text-lg font-bold">
                            {forecastData.location.name +
                                ", " +
                                forecastData.location.region}
                        </h2>
                        <h2 className="text-lg font-bold">
                            {forecastData.location.country}
                        </h2>
                    </div>
                    <ForecastDetail
                        temperature={
                            unitOfMeasure == UnitOfMeasure.Celsius
                                ? selectedForecastDay.day.avgtemp_c
                                : selectedForecastDay.day.avgtemp_f
                        }
                        className="my-8"
                        imageUrl={
                            "https:" + selectedForecastDay.day.condition.icon
                        }
                        chanceOfRain={
                            selectedForecastDay.day.daily_chance_of_rain
                        }
                    />
                    <div className="flex py-8 justify-between">
                        {forecastData.forecast.forecastday.map(
                            (forecastday, index) => {
                                const date = new Date(forecastday.date);
                                const dayOfTheWeek = day[date.getDay()];
                                const imageUrl = forecastday.day.condition.icon;
                                let temperature = forecastday.day.avgtemp_c;
                                if (unitOfMeasure == UnitOfMeasure.Fahrenheit) {
                                    temperature = forecastday.day.avgtemp_f;
                                }
                                return (
                                    <ForecastSnippet
                                        key={index}
                                        index={index}
                                        dayOfTheWeek={dayOfTheWeek}
                                        temperature={temperature}
                                        imageUrl={"https:" + imageUrl}
                                    />
                                );
                            }
                        )}
                    </div>
                </Card.Content>
            </Card>
        </div>
    );
};
