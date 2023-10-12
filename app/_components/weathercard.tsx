import { Box, BoxProps, Stack, Image, Heading, Text } from "@chakra-ui/react";
import { UnitOfMeasure, type Forecast, Forecastday } from "../../src/weather";
import { UnitOfMeasureContext } from "./unitOfMeasureContext";
import { useContext } from "react";

export interface WeatherCardProps extends BoxProps {
    forecastday: Forecastday;
    isSelected: boolean;
}

const WeatherCard = ({
    forecastday,
    isSelected,
    ...props
}: WeatherCardProps) => {
    const date = new Date(forecastday.date);
    const dayString = date.toLocaleDateString("en-US", { weekday: "short" });
    const { unitOfMeasure } = useContext(UnitOfMeasureContext);
    return (
        <Box {...props}>
            <Stack direction="row" alignItems={"center"}>
                <Stack alignItems={"center"}>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>
                        {dayString}
                    </Text>
                    <Image
                        src={forecastday.day.condition.icon}
                        alt={forecastday.day.condition.text}
                        width={100}
                        height={100}
                    />
                    <Heading as={"h3"} size={"lg"}>
                        {unitOfMeasure === UnitOfMeasure.Celsius
                            ? forecastday.day.avgtemp_c
                            : forecastday.day.avgtemp_f}
                    </Heading>
                </Stack>
            </Stack>
        </Box>
    );
};

export default WeatherCard;
