import { Providers } from "./providers";
import "./globals.css";
import { Metadata } from "next/types";

export const metadata: Metadata = {
    title: "Panahon Client",
    description: "A 3-day weather forecast",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta
                    httpEquiv="Content-Security-Policy"
                    content="upgrade-insecure-requests"
                />
            </head>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
