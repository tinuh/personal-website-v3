import { Heading } from '@chakra-ui/layout'
import React from 'react'
import Typewriter from 'typewriter-effect'
import { Textarea, useColorMode } from '@chakra-ui/react';
import { FormControl, FormLabel, Input, FormErrorMessage, Button } from '@chakra-ui/react';
import { Box } from '@chakra-ui/layout';
import { useForm } from "react-hook-form";

export default function Contact() {
	interface formData {
		name: string
		email: string
		message: string
	}

	const {colorMode} = useColorMode();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<formData>();

	const onSubmit = (data: formData) => {
		console.log(data);
		alert(JSON.stringify(data))
		//Make a post request to cloudflare worker
	};

	return (
		<div>
			<Heading textAlign="center">
				<Typewriter
					onInit={(typewriter) => {
						typewriter.changeDelay(50).typeString('Contact').start();
					}}
				/>
			</Heading>
			<Box className='main-outer-box' mt = {10}>
				<Box className={`main-inner-box-${colorMode}`} borderRadius='lg' p={10} textAlign="center">
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormControl>

							<FormLabel htmlFor="name">Name</FormLabel>

							<Input variant='filled' id="name" placeholder="Name" {...register("name", { required: "Name is Required!" })} />

							{errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}

						</FormControl>
						<Box m = {5} />
						<FormControl>

							<FormLabel htmlFor="email">Email</FormLabel>

							<Input variant='filled' id="email" placeholder="Email" {...register("email", { required: true })} />

							{errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}

						</FormControl>
						<Box m = {5} />
						<FormControl>

							<FormLabel htmlFor="message">Message</FormLabel>

							<Textarea variant='filled' id="message" placeholder="Message" {...register("message", { required: true })} />

							{errors.message && <FormErrorMessage>{errors.message.message}</FormErrorMessage>}

						</FormControl>
						<Box m = {5} />
						<Button type="submit">
							Send
						</Button>
					</form>
				</Box>
			</Box>
		</div>
	)
}
