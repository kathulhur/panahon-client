import { useContext, useEffect, useState } from "react";
import { WeatherDashboard } from "./weatherdashboard";
import { getData } from "../../src/lib/weather";
export default async function PageQueryWrapper(props) {
    const data = await getData("manila");
    return (
        <>
            {data && (
                <WeatherDashboard
                    data={data}
                    maxWidth={"2xl"}
                    marginX={"auto"}
                    marginTop={"16"}
                />
            )}
            {!data && <h1>Loading...</h1>}
        </>
    );
}
