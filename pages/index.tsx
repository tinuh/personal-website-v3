import type { NextPage } from "next";
import Head from "next/head";
import { Heading, Box, Text, Stack } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { useColorMode } from "@chakra-ui/react";
import Card from "../components/Card";

const Home: NextPage = () => {
	const { colorMode } = useColorMode();

	return (
		<Box className="main-outer-box">
			<Card>
				<Stack direction={["column", "row"]} spacing={10}>
					<Box
						textAlign="center"
						//verticalAlign={"middle"}
						w={["100%", "100%", "100%", "100%", "75%", "50%"]}
					>
						<img
							style={{
								borderRadius: "50%",
								objectFit: "cover",
								width: "100%",
								aspectRatio: "1/1",
							}}
							alt="Personal Photo"
							src="/assets/me.png"
						/>
					</Box>
					<Box>
						<Heading textAlign={"center"} mb={5}>
							<Typewriter
								onInit={(typewriter) => {
									typewriter
										.changeDelay(50)
										.typeString("Hey, I'm Tinu Vanapamula")
										.start();
								}}
							/>
						</Heading>
						<Text fontSize={"1rem"}>
							I&apos;m an incoming freshman studying Computer Science at the{" "}
							{""}
							<a
								href="https://umd.edu"
								target="blank"
								className={`link link-${colorMode}`}
							>
								University of Maryland
							</a>
							, with a strong passion for technology. My current interests lie
							in software engineering, data analytics, and server management. I
							thrive on tackling challenges and enjoy researching and
							engineering creative solutions. In my free time, I maintain a home
							lab and build software I find useful. Beyond computers, I also
							enjoy playing ultimate frisbee and rock climbing.
						</Text>
					</Box>
				</Stack>
			</Card>
		</Box>
	);
};

export default Home;
