import React from 'react'
import {
	Heading,
	Box,
	Stack,
	Text
} from '@chakra-ui/layout';
import Typewriter from 'typewriter-effect';
import { useColorMode } from '@chakra-ui/color-mode';
import Card from '../components/Card';

const creations = [
	{
		name: "QR Tools",
		link: "https://qr.tinu.tech",
	},
	{
		name: "Pollster",
		link: "https://pollster.tinu.tech"
	},
	{
		name: "Digital Fit",
		link: "https://fit.tinu.tech"
	},
	{
		name: "Homework Manager",
		link: "https://homework.tinu.tech"
	}
]

export default function Creations() {
	const { colorMode } = useColorMode();

	return (
		<Box className = "main-outer-box">
			<Heading textAlign="center">
				<Typewriter
					onInit={(typewriter) => {
						typewriter.changeDelay(50).typeString("Creations").start();
					}}
				/>
			</Heading>
			<Stack direction = {['column', 'row']} spacing = {10} mt={10}>
				{creations.map((creation, i) => (
					<Card delay = {0.2 * i} key = {i} duration = {0.5}>
						{creation.name}
					</Card>
				))}
			</Stack>
		</Box>
	)
}
