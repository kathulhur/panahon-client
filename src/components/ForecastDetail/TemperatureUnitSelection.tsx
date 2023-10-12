"use client";

import { UnitOfMeasure } from "@/src/weather";
import { UnitOfMeasureContext } from "app/_components/unitOfMeasureContext";
import { ComponentPropsWithoutRef, useContext } from "react";
import clsx from "clsx";
export const TemperatureUnitSelection = (
    props: ComponentPropsWithoutRef<"span">
) => {
    const context = useContext(UnitOfMeasureContext);
    const temperatureUnit = context?.unitOfMeasure;
    const setTemperatureUnit = context?.setUnitOfMeasure;
    return (
        <span {...props}>
            <button
                onClick={() => setTemperatureUnit(UnitOfMeasure.Celsius)}
                className={clsx(
                    "px-2 py-1",
                    temperatureUnit === UnitOfMeasure.Celsius &&
                        "bg-sky-500  rounded text-white font-bold"
                )}
            >
                &deg;C
            </button>
            <span> | </span>
            <button
                onClick={() => setTemperatureUnit(UnitOfMeasure.Fahrenheit)}
                className={clsx(
                    "px-2 py-1",
                    temperatureUnit === UnitOfMeasure.Fahrenheit &&
                        "bg-sky-500 rounded text-white font-bold"
                )}
            >
                &deg;F
            </button>
        </span>
    );
};
