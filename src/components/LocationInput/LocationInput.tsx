"use client";

import { LocationContext } from "app/_components/LocationContext";
import { ComponentPropsWithoutRef, useContext, useRef } from "react";

export const LocationInput = (props: ComponentPropsWithoutRef<"div">) => {
    const { setLocation } = useContext(LocationContext);
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div {...props}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setLocation(inputRef.current.value);
                }}
            >
                <label htmlFor="location" className="sr-only">
                    Location
                </label>
                <input
                    ref={inputRef}
                    type="text"
                    name="location"
                    id="location"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                    placeholder={"Enter Location"}
                />
            </form>
        </div>
    );
};
