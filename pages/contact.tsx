import { Heading } from '@chakra-ui/layout'
import React from 'react'
import Typewriter from 'typewriter-effect'

export default function Contact() {
	return (
		<div>
			<Heading textAlign="center">
				<Typewriter
					onInit={(typewriter) => {
						typewriter.changeDelay(50).typeString('Contact').start();
					}}
				/>
			</Heading>
		</div>
	)
}
