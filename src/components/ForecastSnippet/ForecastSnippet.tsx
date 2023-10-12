"use client";

import { WeatherForecastContext } from "app/Wrapper";
import clsx from "clsx";
import Image from "next/image";
import { useContext } from "react";

interface ForecastSnippetProps {
    dayOfTheWeek: string;
    temperature: number;
    imageUrl: string;
    index: number;
}

export const ForecastSnippet = ({
    dayOfTheWeek,
    temperature,
    imageUrl,
    index,
}: ForecastSnippetProps) => {
    const { selectedForecastDayIndex, setSelectedForecastDayIndex } =
        useContext(WeatherForecastContext);
    const selected = selectedForecastDayIndex === index;
    return (
        <div
            className={clsx(
                "flex flex-col items-center group rounded hover:bg-sky-500 group p-4",
                selected && "ring-2 ring-sky-400 ring-inset"
            )}
            onClick={() => {
                setSelectedForecastDayIndex(index);
            }}
        >
            <span className="text-2xl font-bold group-hover:text-white">
                {dayOfTheWeek}
            </span>
            <Image
                src={imageUrl}
                alt={"placeholder image"}
                width={128}
                height={128}
            />
            <span className="text-2xl font-bold group-hover:text-white">
                {temperature}
            </span>
        </div>
    );
};
