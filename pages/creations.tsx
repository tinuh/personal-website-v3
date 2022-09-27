import React from "react";
import Head from "next/head";
import { Heading, Box, Stack, SimpleGrid, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { useColorMode } from "@chakra-ui/color-mode";
import Card from "../components/Card";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import parse from "html-react-parser";

export async function getStaticProps() {
	const headers = {
		Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
	};

	let res = await fetch(
		"https://api.airtable.com/v0/appj7u8nrwKWHIEdc/Creations?filterByFormula=({Status}='Published')&sort[0][field]=Priority&sort[0][direction]=asc",
		{
			method: "GET",
			headers: headers,
		}
	);

	let data = await res.json();

	return {
		props: { data: data.records },
	};
}

interface creationType {
	fields: {
		Name: string;
		Description: string;
		URL: string;
		Github: string;
		Image: [
			{
				url: string;
			}
		];
	};
}

export default function Creations(props: { data: creationType[] }) {
	const { colorMode } = useColorMode();

	return (
		<Box className="main-outer-box">
			<Head>
				<title>Creations - Tinu Vanapamula</title>
			</Head>
			<Heading textAlign="center">
				<Typewriter
					onInit={(typewriter) => {
						typewriter.changeDelay(50).typeString("Creations").start();
					}}
				/>
			</Heading>
			<SimpleGrid columns={[1, 2, 2, 3]} spacing={7} mt={10} textAlign="center">
				{props.data.map((creation, i) => (
					<Card
						padding={6}
						noShadow
						delay={0.3 * i}
						key={i}
						duration={0.5}
						mt={12}
						mb={15}
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
										w="100%"
										_after={{
											transition: "all .3s ease",
											content: '""',
											w: "full",
											h: "full",
											pos: "absolute",
											top: 0,
											left: 0,
											backgroundImage: creation.fields.Image[0].url,
											backgroundSize: "cover",
											backgroundPosition: "center",
											filter: "blur(20px)",
											zIndex: -1,
										}}
									>
										<a target="blank" href={creation.fields.URL}>
											<Image
												borderRadius={"10px"}
												w="100%"
												objectFit={"cover"}
												src={creation.fields.Image[0].url}
											/>
										</a>
									</Box>
								</Tilt>
							</motion.div>
						</Box>
						<Text mt={3} mb={1} fontSize={"1.3rem"}>
							{creation.fields.Name}
						</Text>
						<Text textAlign="left">
							{parse(
								creation.fields.Description.replace(
									/index-link/g,
									`link link-${colorMode}`
								)
							)}
						</Text>
					</Card>
				))}
			</SimpleGrid>
		</Box>
	);
}
