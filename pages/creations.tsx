import React from 'react'
import { Heading } from '@chakra-ui/layout';
import Typewriter from 'typewriter-effect';

export default function Creations() {
    return (
        <div>
           <Heading textAlign="center">
                <Typewriter
                onInit={(typewriter) => {
                    typewriter.changeDelay(50).typeString("Creations").start();
                }}
                />
            </Heading>
        </div>
    )
}
