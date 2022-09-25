import React from "react";
import { Heading, Box, Stack, SimpleGrid, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { useColorMode } from "@chakra-ui/color-mode";
import Card from "../components/Card";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const creations = [
	{
		name: "QR Tools",
		link: "https://qr.tinu.tech",
		img: "https://dl.airtable.com/.attachments/53c69098ee24adfb06cd4d4ba694072b/9046f2c2/Screenshot2021-11-02213547.png",
	},
	{
		name: "Pollster",
		link: "https://pollster.tinu.tech",
		img: "https://dl.airtable.com/.attachments/2aa9d3261280c735dbc81e14a4944a1a/61020969/pollster.png",
	},
	{
		name: "Digital Fit",
		link: "https://fit.tinu.tech",
		img: "https://dl.airtable.com/.attachments/d506ac2f66ce77f2ee137f4fb8f8f5eb/3efa6682/digitalFit.png",
	},
	{
		name: "Homework Manager",
		link: "https://homework.tinu.tech",
		img: "https://dl.airtable.com/.attachments/a7341132e86d622498ca2becdca3516e/84da3885/homeworkManager.jpg",
	},
];

export default function Creations() {
	const { colorMode } = useColorMode();

	return (
		<Box className="main-outer-box">
			<Heading textAlign="center">
				<Typewriter
					onInit={(typewriter) => {
						typewriter.changeDelay(50).typeString("Creations").start();
					}}
				/>
			</Heading>
			<SimpleGrid columns={[1, 2, 3]} spacing={7} mt={10} textAlign="center">
				{creations.map((creation, i) => (
					<Card
						padding={6}
						noShadow
						delay={0.3 * i}
						key={i}
						duration={0.5}
						mt={12}
						mb={10}
					>
						<Box mt={-12}>
							<motion.div
								initial={{
									opacity: 0,
									y: 25,
								}}
								animate={{
									opacity: 1,
									y: 0,
								}}
								transition={{
									duration: 0.5,
									delay: 0.3 + 0.3 * i,
								}}
							>
								<Tilt
									tiltMaxAngleX={10}
									tiltMaxAngleY={10}
									transitionSpeed={2000}
									scale={1.05}
									glareEnable
									glareBorderRadius="10px"
									glareMaxOpacity={0.75}
								>
									<Box
										rounded={"lg"}
										pos={"relative"}
										height={"150px"}
										_after={{
											transition: "all .3s ease",
											content: '""',
											w: "full",
											h: "full",
											pos: "absolute",
											top: 0,
											left: 0,
											backgroundImage: creation.img,
											backgroundSize: "cover",
											backgroundPosition: "center",
											filter: "blur(20px)",
											zIndex: -1,
										}}
									>
										<a target="blank" href={creation.link}>
											<Image
												rounded={"lg"}
												height={150}
												objectFit={"cover"}
												src={creation.img}
											/>
										</a>
									</Box>
								</Tilt>
							</motion.div>
						</Box>
						<Text py="5">{creation.name}</Text>
					</Card>
				))}
			</SimpleGrid>
		</Box>
	);
}
