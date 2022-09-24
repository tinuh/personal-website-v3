import React from 'react'
import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/layout'
import { useColorMode } from '@chakra-ui/color-mode'
import Tilt from './Tilt'

interface CardProps {
	children: React.ReactNode,
	delay?: number,
	tilt?: boolean,
	duration?: number,
	noShadow?: boolean,
	padding?: number,
}

export default function Card(props: CardProps) {
	const { colorMode } = useColorMode();
	const shadow = `${!props.noShadow ? `5px 5px 25px 10px ${colorMode === "dark" ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.25)"} , -5px -5px 25px 10px ${colorMode === "dark" ? "rgba(255, 255, 255, 0.22" : "rgba(0, 0, 0, 0.22)"}` : "none"}`;

	return (
		<Tilt tilt={props.tilt}>
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1, boxShadow: shadow}}
				transition={{ duration: props.duration || 0.75, delay: props.delay || 0 }}
				className={`main-inner-box-${colorMode}`}
			>
				<Box p={props.padding || 10}>
					{props.children}
				</Box>
			</motion.div>
		</Tilt>
	)
}
