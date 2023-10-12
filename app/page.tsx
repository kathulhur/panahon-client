import { ForecastDetail } from "@/src/components/ForecastDetail/ForecastDetail";
import { Card } from "../src/components/Card/Card";
import { LocationInput } from "@/src/components/LocationInput/LocationInput";
import { ForecastSnippet } from "@/src/components/ForecastSnippet/ForecastSnippet";
import { getData } from "@/src/lib/weather";
import { Wrapper } from "./Wrapper";

export default async function Page() {
    const forecast = await getData("manila");
    return <Wrapper data={forecast} />;
}
