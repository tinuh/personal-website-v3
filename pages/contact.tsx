import { Heading } from '@chakra-ui/layout'
import React from 'react'
import Typewriter from 'typewriter-effect'
import { Textarea, useColorMode } from '@chakra-ui/react';
import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';
import { Box } from '@chakra-ui/layout';
import { useForm } from "react-hook-form";

export default function Contact() {
	const {colorMode} = useColorMode();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();


	const onSubmit = (data) => {
		console.log(data);
		
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
				<Box className={`main-inner-box-${colorMode}`} borderRadius='lg' p={10}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormControl>

							<FormLabel htmlFor="name">Name</FormLabel>

							<Input variant='filled' id="name" placeholder="Name" {...register("name", { required: true })} />

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
					</form>
				</Box>
			</Box>
		</div>
	)
}
