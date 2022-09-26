import React, { useState } from "react";
import Link from "next/link";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Box, Flex, Link as CLink, Text } from "@chakra-ui/layout";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import ColorModeToggle from "./ColorModeToggle";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Button, IconButton } from "@chakra-ui/react";

const elements = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Creations",
		link: "/creations",
	},
	{
		name: "Contact",
		link: "/contact",
	},
];

const TextAnimation = () => {
	const { colorMode } = useColorMode();
	const { pathname } = useRouter();

	return (
		<Link href="/">
			<CLink
				_hover={{ textDecoration: "none" }}
				style={{ marginTop: "auto", marginBottom: "auto" }}
			>
				<motion.svg
					width="225"
					viewBox="0 0 270 33"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<motion.path
						key={pathname}
						initial={{
							pathLength: 0,
						}}
						animate={{
							pathLength: 0.11,
						}}
						transition={{
							duration: 3,
							ease: "easeInOut",
						}}
						d="M6.392 25V5.928H0.12V2.6H16.312V5.928H9.848V25H6.392ZM20.2855 25V8.2H23.5815V25H20.2855ZM21.8855 4.488C21.1815 4.488 20.6375 4.30667 20.2535 3.944C19.8695 3.58133 19.6775 3.06933 19.6775 2.408C19.6775 1.78933 19.8695 1.288 20.2535 0.903999C20.6588 0.519999 21.2028 0.327999 21.8855 0.327999C22.5895 0.327999 23.1335 0.509333 23.5175 0.872C23.9015 1.23467 24.0935 1.74667 24.0935 2.408C24.0935 3.02667 23.8908 3.528 23.4855 3.912C23.1015 4.296 22.5682 4.488 21.8855 4.488ZM28.6478 25V8.2H31.9438V11.656L31.3678 12.04C31.5811 11.2933 31.9971 10.6107 32.6158 9.992C33.2344 9.352 33.9704 8.84 34.8238 8.456C35.6771 8.05067 36.5518 7.848 37.4478 7.848C38.7278 7.848 39.7944 8.104 40.6478 8.616C41.5011 9.10667 42.1411 9.864 42.5678 10.888C42.9944 11.912 43.2078 13.2027 43.2078 14.76V25H39.9118V14.984C39.9118 14.024 39.7838 13.2347 39.5278 12.616C39.2718 11.976 38.8771 11.5173 38.3438 11.24C37.8104 10.9413 37.1491 10.8133 36.3598 10.856C35.7198 10.856 35.1331 10.9627 34.5998 11.176C34.0664 11.368 33.5971 11.6453 33.1918 12.008C32.8078 12.3707 32.4984 12.7973 32.2638 13.288C32.0504 13.7573 31.9438 14.2693 31.9438 14.824V25H30.3118C30.0344 25 29.7571 25 29.4798 25C29.2024 25 28.9251 25 28.6478 25ZM53.567 25.32C52.3723 25.32 51.327 25.0427 50.431 24.488C49.5563 23.9333 48.8737 23.1547 48.383 22.152C47.9137 21.1493 47.679 19.9547 47.679 18.568V8.2H50.975V17.672C50.975 18.6533 51.1243 19.5067 51.423 20.232C51.743 20.936 52.191 21.48 52.767 21.864C53.3643 22.248 54.079 22.44 54.911 22.44C55.5297 22.44 56.095 22.344 56.607 22.152C57.119 21.9387 57.5563 21.6507 57.919 21.288C58.303 20.9253 58.6017 20.488 58.815 19.976C59.0283 19.464 59.135 18.9093 59.135 18.312V8.2H62.431V25H59.135V21.48L59.711 21.096C59.455 21.8853 59.0177 22.6 58.399 23.24C57.8017 23.88 57.087 24.392 56.255 24.776C55.423 25.1387 54.527 25.32 53.567 25.32ZM83.4468 25L74.4868 2.6H78.4227L83.7668 16.2C84.0228 16.8613 84.2468 17.4587 84.4388 17.992C84.6521 18.5253 84.8334 19.016 84.9828 19.464C85.1321 19.8907 85.2708 20.296 85.3988 20.68C85.5268 21.064 85.6548 21.448 85.7828 21.832L84.9508 21.864C85.1001 21.352 85.2601 20.8187 85.4308 20.264C85.6014 19.7093 85.7934 19.1013 86.0068 18.44C86.2414 17.7787 86.5188 17.032 86.8388 16.2L91.7987 2.6H95.8308L86.8068 25H83.4468ZM103.456 25.32C102.069 25.32 100.8 24.936 99.6475 24.168C98.5168 23.4 97.6102 22.3547 96.9275 21.032C96.2448 19.7093 95.9035 18.216 95.9035 16.552C95.9035 14.8667 96.2448 13.3733 96.9275 12.072C97.6315 10.7493 98.5702 9.71467 99.7435 8.968C100.938 8.22133 102.272 7.848 103.744 7.848C104.618 7.848 105.418 7.976 106.144 8.232C106.869 8.488 107.498 8.85067 108.032 9.32C108.586 9.768 109.034 10.2907 109.376 10.888C109.738 11.4853 109.962 12.1253 110.048 12.808L109.312 12.552V8.2H112.64V25H109.312V21L110.08 20.776C109.952 21.352 109.685 21.9173 109.28 22.472C108.896 23.0053 108.394 23.4853 107.776 23.912C107.178 24.3387 106.506 24.68 105.76 24.936C105.034 25.192 104.266 25.32 103.456 25.32ZM104.32 22.28C105.322 22.28 106.208 22.0347 106.976 21.544C107.744 21.0533 108.341 20.3813 108.768 19.528C109.216 18.6533 109.44 17.6613 109.44 16.552C109.44 15.464 109.216 14.4933 108.768 13.64C108.341 12.7867 107.744 12.1147 106.976 11.624C106.208 11.1333 105.322 10.888 104.32 10.888C103.338 10.888 102.464 11.1333 101.696 11.624C100.949 12.1147 100.352 12.7867 99.9035 13.64C99.4768 14.4933 99.2635 15.464 99.2635 16.552C99.2635 17.6613 99.4768 18.6533 99.9035 19.528C100.352 20.3813 100.949 21.0533 101.696 21.544C102.464 22.0347 103.338 22.28 104.32 22.28ZM117.242 25V8.2H120.538V11.656L119.962 12.04C120.175 11.2933 120.591 10.6107 121.21 9.992C121.828 9.352 122.564 8.84 123.418 8.456C124.271 8.05067 125.146 7.848 126.042 7.848C127.322 7.848 128.388 8.104 129.242 8.616C130.095 9.10667 130.735 9.864 131.162 10.888C131.588 11.912 131.802 13.2027 131.802 14.76V25H128.506V14.984C128.506 14.024 128.378 13.2347 128.122 12.616C127.866 11.976 127.471 11.5173 126.938 11.24C126.404 10.9413 125.743 10.8133 124.954 10.856C124.314 10.856 123.727 10.9627 123.194 11.176C122.66 11.368 122.191 11.6453 121.786 12.008C121.402 12.3707 121.092 12.7973 120.858 13.288C120.644 13.7573 120.538 14.2693 120.538 14.824V25H118.906C118.628 25 118.351 25 118.074 25C117.796 25 117.519 25 117.242 25ZM142.737 25.32C141.35 25.32 140.081 24.936 138.929 24.168C137.798 23.4 136.891 22.3547 136.209 21.032C135.526 19.7093 135.185 18.216 135.185 16.552C135.185 14.8667 135.526 13.3733 136.209 12.072C136.913 10.7493 137.851 9.71467 139.025 8.968C140.219 8.22133 141.553 7.848 143.025 7.848C143.899 7.848 144.699 7.976 145.425 8.232C146.15 8.488 146.779 8.85067 147.313 9.32C147.867 9.768 148.315 10.2907 148.657 10.888C149.019 11.4853 149.243 12.1253 149.329 12.808L148.593 12.552V8.2H151.921V25H148.593V21L149.361 20.776C149.233 21.352 148.966 21.9173 148.561 22.472C148.177 23.0053 147.675 23.4853 147.057 23.912C146.459 24.3387 145.787 24.68 145.041 24.936C144.315 25.192 143.547 25.32 142.737 25.32ZM143.601 22.28C144.603 22.28 145.489 22.0347 146.257 21.544C147.025 21.0533 147.622 20.3813 148.049 19.528C148.497 18.6533 148.721 17.6613 148.721 16.552C148.721 15.464 148.497 14.4933 148.049 13.64C147.622 12.7867 147.025 12.1147 146.257 11.624C145.489 11.1333 144.603 10.888 143.601 10.888C142.619 10.888 141.745 11.1333 140.977 11.624C140.23 12.1147 139.633 12.7867 139.185 13.64C138.758 14.4933 138.545 15.464 138.545 16.552C138.545 17.6613 138.758 18.6533 139.185 19.528C139.633 20.3813 140.23 21.0533 140.977 21.544C141.745 22.0347 142.619 22.28 143.601 22.28ZM156.523 32.04V8.2H159.851V12.04L159.339 11.752C159.467 11.112 159.829 10.504 160.427 9.928C161.024 9.33067 161.749 8.85067 162.603 8.488C163.477 8.104 164.373 7.912 165.291 7.912C166.805 7.912 168.149 8.28533 169.323 9.032C170.496 9.77867 171.424 10.8027 172.107 12.104C172.789 13.4053 173.131 14.8987 173.131 16.584C173.131 18.248 172.789 19.7413 172.107 21.064C171.445 22.3653 170.528 23.4 169.355 24.168C168.181 24.9147 166.859 25.288 165.387 25.288C164.405 25.288 163.456 25.096 162.539 24.712C161.621 24.3067 160.843 23.7947 160.203 23.176C159.563 22.5573 159.168 21.9173 159.019 21.256L159.851 20.808V32.04H156.523ZM164.843 22.248C165.824 22.248 166.699 22.0027 167.467 21.512C168.235 21.0213 168.843 20.3493 169.291 19.496C169.739 18.6427 169.963 17.672 169.963 16.584C169.963 15.496 169.739 14.536 169.291 13.704C168.864 12.8507 168.267 12.1787 167.499 11.688C166.731 11.1973 165.845 10.952 164.843 10.952C163.84 10.952 162.955 11.1973 162.187 11.688C161.419 12.1573 160.811 12.8187 160.363 13.672C159.915 14.5253 159.691 15.496 159.691 16.584C159.691 17.672 159.915 18.6427 160.363 19.496C160.811 20.3493 161.419 21.0213 162.187 21.512C162.955 22.0027 163.84 22.248 164.843 22.248ZM183.174 25.32C181.788 25.32 180.518 24.936 179.366 24.168C178.236 23.4 177.329 22.3547 176.646 21.032C175.964 19.7093 175.622 18.216 175.622 16.552C175.622 14.8667 175.964 13.3733 176.646 12.072C177.35 10.7493 178.289 9.71467 179.462 8.968C180.657 8.22133 181.99 7.848 183.462 7.848C184.337 7.848 185.137 7.976 185.862 8.232C186.588 8.488 187.217 8.85067 187.75 9.32C188.305 9.768 188.753 10.2907 189.094 10.888C189.457 11.4853 189.681 12.1253 189.766 12.808L189.03 12.552V8.2H192.358V25H189.03V21L189.798 20.776C189.67 21.352 189.404 21.9173 188.998 22.472C188.614 23.0053 188.113 23.4853 187.494 23.912C186.897 24.3387 186.225 24.68 185.478 24.936C184.753 25.192 183.985 25.32 183.174 25.32ZM184.038 22.28C185.041 22.28 185.926 22.0347 186.694 21.544C187.462 21.0533 188.06 20.3813 188.486 19.528C188.934 18.6533 189.158 17.6613 189.158 16.552C189.158 15.464 188.934 14.4933 188.486 13.64C188.06 12.7867 187.462 12.1147 186.694 11.624C185.926 11.1333 185.041 10.888 184.038 10.888C183.057 10.888 182.182 11.1333 181.414 11.624C180.668 12.1147 180.07 12.7867 179.622 13.64C179.196 14.4933 178.982 15.464 178.982 16.552C178.982 17.6613 179.196 18.6533 179.622 19.528C180.07 20.3813 180.668 21.0533 181.414 21.544C182.182 22.0347 183.057 22.28 184.038 22.28ZM196.896 25V8.2H200.224V11.784L199.616 12.168C199.787 11.6133 200.054 11.08 200.416 10.568C200.8 10.056 201.259 9.608 201.792 9.224C202.347 8.81867 202.934 8.49867 203.552 8.264C204.192 8.02933 204.843 7.912 205.504 7.912C206.464 7.912 207.307 8.072 208.032 8.392C208.758 8.712 209.355 9.192 209.824 9.832C210.294 10.472 210.635 11.272 210.848 12.232L210.336 12.104L210.56 11.56C210.795 11.0693 211.115 10.6107 211.52 10.184C211.947 9.736 212.427 9.34133 212.96 9C213.494 8.65867 214.059 8.392 214.656 8.2C215.254 8.008 215.84 7.912 216.416 7.912C217.675 7.912 218.71 8.168 219.52 8.68C220.352 9.192 220.971 9.97067 221.376 11.016C221.803 12.0613 222.016 13.3627 222.016 14.92V25H218.688V15.112C218.688 14.152 218.56 13.3733 218.304 12.776C218.07 12.1573 217.707 11.6987 217.216 11.4C216.726 11.1013 216.096 10.952 215.328 10.952C214.731 10.952 214.166 11.0587 213.632 11.272C213.12 11.464 212.672 11.7413 212.288 12.104C211.904 12.4667 211.606 12.8933 211.392 13.384C211.179 13.8533 211.072 14.376 211.072 14.952V25H207.744V15.048C207.744 14.1733 207.616 13.4373 207.36 12.84C207.104 12.2213 206.731 11.752 206.24 11.432C205.75 11.112 205.152 10.952 204.448 10.952C203.851 10.952 203.296 11.0587 202.784 11.272C202.272 11.464 201.824 11.7413 201.44 12.104C201.056 12.4453 200.758 12.8613 200.544 13.352C200.331 13.8213 200.224 14.3333 200.224 14.888V25H196.896ZM232.317 25.32C231.122 25.32 230.077 25.0427 229.181 24.488C228.306 23.9333 227.624 23.1547 227.133 22.152C226.664 21.1493 226.429 19.9547 226.429 18.568V8.2H229.725V17.672C229.725 18.6533 229.874 19.5067 230.173 20.232C230.493 20.936 230.941 21.48 231.517 21.864C232.114 22.248 232.829 22.44 233.661 22.44C234.28 22.44 234.845 22.344 235.357 22.152C235.869 21.9387 236.306 21.6507 236.669 21.288C237.053 20.9253 237.352 20.488 237.565 19.976C237.778 19.464 237.885 18.9093 237.885 18.312V8.2H241.181V25H237.885V21.48L238.461 21.096C238.205 21.8853 237.768 22.6 237.149 23.24C236.552 23.88 235.837 24.392 235.005 24.776C234.173 25.1387 233.277 25.32 232.317 25.32ZM245.868 
            25V1.32H249.164V25H245.868ZM259.987 25.32C258.6 25.32 257.331 24.936 256.179 24.168C255.048 23.4 254.141 22.3547 253.459 21.032C252.776 19.7093 252.435 18.216 252.435 16.552C252.435 14.8667 252.776 13.3733 253.459 12.072C254.163 10.7493 255.101 9.71467 256.275 8.968C257.469 8.22133 258.803 7.848 260.275 7.848C261.149 7.848 261.949 7.976 262.675 8.232C263.4 8.488 264.029 8.85067 264.563 9.32C265.117 9.768 265.565 10.2907 265.907 10.888C266.269 11.4853 266.493 12.1253 266.579 12.808L265.843 12.552V8.2H269.171V25H265.843V21L266.611 20.776C266.483 21.352 266.216 21.9173 265.811 22.472C265.427 23.0053 264.925 23.4853 264.307 23.912C263.709 24.3387 263.037 24.68 262.291 24.936C261.565 25.192 260.797 25.32 259.987 25.32ZM260.851 22.28C261.853 22.28 262.739 22.0347 263.507 21.544C264.275 21.0533 264.872 20.3813 265.299 19.528C265.747 18.6533 265.971 17.6613 265.971 16.552C265.971 15.464 265.747 14.4933 265.299 13.64C264.872 12.7867 264.275 12.1147 263.507 11.624C262.739 11.1333 261.853 10.888 260.851 10.888C259.869 10.888 258.995 11.1333 258.227 11.624C257.48 12.1147 256.883 12.7867 256.435 13.64C256.008 14.4933 255.795 15.464 255.795 16.552C255.795 17.6613 256.008 18.6533 256.435 19.528C256.883 20.3813 257.48 21.0533 258.227 21.544C258.995 22.0347 259.869 22.28 260.851 22.28Z"
						stroke={colorMode === "dark" ? "#fff" : "#000"}
					/>
				</motion.svg>
			</CLink>
		</Link>
	);
};

const Element = (props: { href: string; name: string; onClick?: any }) => {
	const { href, name, onClick } = props;

	return (
		<Link href={href}>
			<CLink
				px={2}
				py={1}
				margin="auto"
				rounded={"md"}
				onClick={onClick}
				_hover={{
					textDecoration: "none",
					bg: useColorModeValue("gray.200", "gray.700"),
				}}
			>
				{name}
			</CLink>
		</Link>
	);
};

const Ham = ({ children }: { children?: React.ReactNode }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const { colorMode } = useColorMode();

	const menuVariants = {
		open: {
			height: "100vh",
			backdropFilter: "blur(30px)",
			backgroundColor: `rgba(${
				colorMode === "dark" ? "0, 0, 0" : "255, 255, 255"
			}, 0.3)`,
		},
		closed: {
			backdropFilter: "blur(10px)",
			backgroundColor: `rgba(${
				colorMode === "light" ? "0, 0, 0" : "255, 255, 255"
			}, 0.1)`,
			overflow: "hidden",
		},
	};

	const linkVariants = {
		open: {
			opacity: 1,
			display: "block",
		},
		closed: {
			opacity: 0,
			display: "none",
		},
	};

	return (
		<Box pb={"7.5vh"}>
			<motion.nav
				initial={false}
				variants={menuVariants}
				animate={isOpen ? "open" : "closed"}
				transition={{ duration: 0.5 }}
				style={{
					zIndex: 1,
					position: "fixed",
					width: "100%",
					textAlign: "center",
					top: 0,
				}}
				className={`nav-${colorMode}`}
			>
				<Box zIndex={2}>
					<Flex px={3} py={2}>
						<TextAnimation />

						<Box mr={0} ml="auto">
							<IconButton
								onClick={() => setIsOpen(!isOpen)}
								aria-label="Toggle Navbar"
							>
								{isOpen ? <CloseIcon /> : <HamburgerIcon />}
							</IconButton>
						</Box>
					</Flex>
				</Box>
				<Box>
					{elements.map((element, i) => (
						<motion.div
							key={i}
							initial={false}
							variants={linkVariants}
							transition={
								isOpen
									? {
											delay: 0.5 + 0.2 * i,
									  }
									: {}
							}
							animate={isOpen ? "open" : "closed"}
						>
							<Box my={10}>
								<Element
									href={element.link}
									name={element.name}
									onClick={() => setIsOpen(false)}
								/>
							</Box>
						</motion.div>
					))}
				</Box>
			</motion.nav>
		</Box>
	);
};

const Bar = ({ children }: { children?: React.ReactNode }) => {
	const { colorMode } = useColorMode();

	return (
		<Box className={`nav-${colorMode}`}>
			<Flex px={3} py={2}>
				<TextAnimation />

				<Box mr={0} ml="auto">
					<Element href="/" name={"Home"} />
					<Element href="/creations" name={"Creations"} />
					<Element href="/contact" name={"Contact"} />

					<ColorModeToggle ml={3} />
				</Box>
				{children}
			</Flex>
		</Box>
	);
};

export default function Nav() {
	return (
		<>
			{useBreakpointValue({
				sm: <Bar />,
				base: <Ham />,
			})}
		</>
	);
}
