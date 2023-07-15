'use client'

import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { LocationContext } from "./LocationContext"


export default function LocationInput() {
    const { setLocation } = useContext(LocationContext)
    const [text, setText] = useState('')
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                setLocation(text)
            }}
            style={{ margin: "1rem 2rem 1rem 2rem"}}
        >
            <FormControl
                textAlign={'center'}
            >
            <FormLabel margin={0}></FormLabel>
            <Input
                margin={0}
                maxWidth={'24rem'}
                minWidth={'12rem'}
                type="text" 
                placeholder="manila" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            <FormHelperText>Enter desired location</FormHelperText>
            </FormControl>
                
        </form>
    )
}