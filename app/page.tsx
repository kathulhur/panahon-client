import { getData } from "@/src/lib/weather";
import { Wrapper } from "./Wrapper";
import { Footer } from "@/src/components/Footer/Footer";

export default async function Page() {
    const forecast = await getData("manila");
    return (
        <>
            <div className="h-full flex flex-col">
                <div className="flex-1">
                    <Wrapper data={forecast} />
                </div>
                <Footer />
            </div>
        </>
    );
}
