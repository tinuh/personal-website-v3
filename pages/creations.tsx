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
		img: 'https://dl.airtable.com/.attachments/53c69098ee24adfb06cd4d4ba694072b/9046f2c2/Screenshot2021-11-02213547.png'
	},
	{
		name: "Pollster",
		link: "https://pollster.tinu.tech",
		img: 'https://dl.airtable.com/.attachments/2aa9d3261280c735dbc81e14a4944a1a/61020969/pollster.png'
	},
	{
		name: "Digital Fit",
		link: "https://fit.tinu.tech",
		img: "https://dl.airtable.com/.attachments/d506ac2f66ce77f2ee137f4fb8f8f5eb/3efa6682/digitalFit.png"
	},
	{
		name: "Homework Manager",
		link: "https://homework.tinu.tech",
		img: "https://dl.airtable.com/.attachments/a7341132e86d622498ca2becdca3516e/84da3885/homeworkManager.jpg"
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
			<Stack direction = {['column', 'row']} spacing = {10} mt={10} textAlign="center">
				{creations.map((creation, i) => (
					<Card padding={0.1} noShadow tilt delay = {0.2 * i} key = {i} duration = {0.5}>
						<img width="300px" style = {{"borderRadius": "10px"}} src={creation.img}/>
						<Text py="5">
							{creation.name}
						</Text>
					</Card>
				))}
			</Stack>
		</Box>
	)
}
