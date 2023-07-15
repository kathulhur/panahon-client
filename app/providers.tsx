// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { LocationContextProvider } from './_components/LocationContext'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <LocationContextProvider>
        {children}
        </LocationContextProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}