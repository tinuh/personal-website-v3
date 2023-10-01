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
						w={["100%", "100%", "100%", "100%", "75%", "50%"]}
					>
						<img
							style={{ borderRadius: "50%" }}
							alt="Photo of Me"
							src="/assets/tinu.png"
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
						<Text fontSize={"1.3rem"}>
							I&apos;m a senior at Montgomery Blair High School interested in
							all things tech. I&apos;m interested in full-stack web
							development, engineering, server management, and a variety of
							other topics. In my spare time, I like to play ultimate frisbee
							and work with my homelab.
						</Text>
					</Box>
				</Stack>
			</Card>
		</Box>
	);
};

export default Home;
