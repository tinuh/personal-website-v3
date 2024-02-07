import "../styles/style.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import Background from "../components/Background";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

const fonts = {
	body: "Lexend, system-ui, sans-serif",
	heading: "Lexend, system-ui, sans-serif",
	mono: "Menlo, monospace",
};

const styles = {
	global: (props: any) => ({
		body: {
			bg: mode("#ffffff", "#000000")(props),
			color: mode("black", "white")(props),
		},
	}),
};

const theme = extendTheme({
	config,
	fonts,
	styles,
});

interface blobType {
	pos: number[];
	color: string;
}

const blobs: blobType[] = [
	{
		pos: [
			Math.random() * 10 - 5,
			Math.random() * 10 - 5,
			Math.random() * 10 - 5,
		],
		color: "#02a8a3",
	},
	{
		pos: [
			Math.random() * 10 - 5,
			Math.random() * 10 - 5,
			Math.random() * 10 - 5,
		],
		color: "#ed685f",
	},
	{
		pos: [
			Math.random() * 10 - 5,
			Math.random() * 10 - 5,
			Math.random() * 10 - 5,
		],
		color: "#9f4bc9",
	},
];

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<title>Tinu Vanapamula</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="Tinu Vanapamula's personal website built with Next.js" />
				<link rel="icon" href="/assets/me.png" />
				<script
					defer
					data-domain="tinu.tech"
					src="https://stats.tinu.tech/js/plausible.js"
				></script>
			</Head>
			<Background blobs={blobs} />
			<Nav />
			<Box py={10}>
				<Component {...pageProps} />
			</Box>
			<Footer />
		</ChakraProvider>
	);
}

export default MyApp;
