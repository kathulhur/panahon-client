// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { LocationContextProvider } from "./_components/LocationContext";
import { UnitOfMeasureContextProvider } from "./_components/unitOfMeasureContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider>
                <LocationContextProvider>
                    <UnitOfMeasureContextProvider>
                        {children}
                    </UnitOfMeasureContextProvider>
                </LocationContextProvider>
            </ChakraProvider>
        </CacheProvider>
    );
}
