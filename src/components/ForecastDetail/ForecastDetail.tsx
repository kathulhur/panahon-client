import Image from "next/image";
import { TemperatureUnitSelection } from "./TemperatureUnitSelection";
import { ComponentPropsWithoutRef } from "react";

interface ForecastDetailProps extends ComponentPropsWithoutRef<"div"> {
    imageUrl: string;
    chanceOfRain: number;
    temperature: number;
}
export const ForecastDetail = ({
    imageUrl,
    chanceOfRain,
    temperature,
    ...props
}: ForecastDetailProps) => {
    return (
        <div {...props}>
            <div className="flex sm:space-x-4 justify-center">
                <Image
                    src={imageUrl}
                    alt={"placeholder image"}
                    width={128}
                    height={128}
                />
                <div className="flex flex-col">
                    <div className="flex ">
                        <span className="text-4xl sm:text-7xl font-bold">
                            {temperature}
                        </span>
                        <TemperatureUnitSelection />
                    </div>
                    <p>Chance of rain: {chanceOfRain}</p>
                </div>
            </div>
        </div>
    );
};
