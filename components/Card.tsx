import React from 'react'
import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/layout'
import { useColorMode } from '@chakra-ui/color-mode'

interface CardProps {
	children: React.ReactNode,
	delay?: number,
	onHover?: boolean
	duration?: number
}

export default function Card(props: CardProps) {
	const { colorMode } = useColorMode();

	return (
		<motion.div
			initial={{ opacity: 0, borderRadius: '8px', scale: 0.95 }}
			animate={{ opacity: 1, scale: 1, boxShadow: `5px 5px 25px 10px ${colorMode === "dark" ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.25)"} , -5px -5px 25px 10px ${colorMode === "dark" ? "rgba(255, 255, 255, 0.22" : "rgba(0, 0, 0, 0.22)"}` }}
			transition={{ duration: props.duration || 0.75, delay: props.delay || 0 }}
		>
			<Box className={`main-inner-box-${colorMode}`} style={{borderRadius: "8px"}} p={10}>
				{props.children}
			</Box>
		</motion.div>
	)
}
