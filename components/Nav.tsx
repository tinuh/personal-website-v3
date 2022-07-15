import React from 'react'
import Link from 'next/link'
import { useBreakpointValue } from '@chakra-ui/media-query';
import ColorModeToggle from './ColorModeToggle';

const Element = (props: {href: string, name: string}) => {
	const {href, name} = props;

	return (
		<Link href = {href}>{name}</Link>
	)
}

const Ham = (props: {children?: React.ReactNode}) => {
	const {children} = props;

	return (
		<div>
			<Element href = "/" name = {"Home"} />
			<Element href = "/contact" name = {"Contact"} />
			{children}
		</div>
	)
}

const Bar = (props: {children?: React.ReactNode}) => {
	const {children} = props;

	return (
		<div>
			<Element href = "/" name = {"Home"} />
			{children}
		</div>
	)
}

export default function Nav() {
	return (
		<div>
			{useBreakpointValue({sm:
				<Ham/>, base: <Bar/>
			})}
			<ColorModeToggle/>
		</div>
	)
}