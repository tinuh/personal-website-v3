import { Heading } from "@chakra-ui/layout";
import React from "react";
import Typewriter from "typewriter-effect";
import { Spinner, Textarea, useColorMode } from "@chakra-ui/react";
import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Button,
	Stack,
	useToast,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";
import { useForm } from "react-hook-form";
import Card from "../components/Card";

export default function Contact() {
	interface formData {
		name: string;
		email: string;
		message: string;
		ip?: string;
	}

	const { colorMode } = useColorMode();
	const toast = useToast();
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<formData>();

	const onSubmit = async (data: formData) => {
		await console.log(data);
		data.ip = "192.168.1.2";

		//Make a post request to cloudflare worker to submit form response
		await fetch("https://contact.tinu-personal.workers.dev", {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
				"Access-Control-Max-Age": "86400",
			},
			referrerPolicy: "no-referrer",
			body: JSON.stringify(data),
		})
			.then((res) => res.text())
			.then((res) => {
				console.log(res);
				toast({
					title: "Success",
					description: res,
					status: "success",
					isClosable: true,
				});
				reset();
			})
			.catch((err) => {
				console.log(err);
				toast({
					title: "Error",
					description: err.message,
					status: "error",
					isClosable: true,
				});
			});
	};

	return (
		<div>
			<Heading textAlign="center">
				<Typewriter
					onInit={(typewriter) => {
						typewriter.changeDelay(50).typeString("Contact").start();
					}}
				/>
			</Heading>
			<Box className="main-outer-box" mt={10} textAlign="center">
				<Card>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Stack direction={["column", "row"]} spacing={5}>
							<FormControl isInvalid={errors.name !== undefined}>
								<FormLabel htmlFor="name">Name</FormLabel>

								<Input
									variant="filled"
									id="name"
									type="text"
									placeholder="Name"
									focusBorderColor={colorMode === "light" ? "black" : "white"}
									isInvalid={errors.name !== undefined}
									{...register("name", {
										required: "Name is required!",
										minLength: {
											value: 2,
											message: "Name must be at least 2 characters long!",
										},
									})}
								/>

								<FormErrorMessage>{errors.name?.message}</FormErrorMessage>
							</FormControl>

							<FormControl isInvalid={errors.email !== undefined}>
								<FormLabel htmlFor="email">Email</FormLabel>

								<Input
									variant="filled"
									id="email"
									placeholder="Email"
									focusBorderColor={colorMode === "light" ? "black" : "white"}
									isInvalid={errors.email !== undefined}
									{...register("email", {
										required: "Email is required!",
										pattern: {
											value: /\S+@\S+\.\S+/,
											message: "Please enter a valid email address!",
										},
									})}
								/>

								<FormErrorMessage>{errors.email?.message}</FormErrorMessage>
							</FormControl>
						</Stack>

						<Box m={5} />
						<FormControl isInvalid={errors.message !== undefined}>
							<FormLabel htmlFor="message">Message</FormLabel>

							<Textarea
								variant="filled"
								id="message"
								placeholder="Message"
								focusBorderColor={colorMode === "light" ? "black" : "white"}
								isInvalid={errors.message !== undefined}
								{...register("message", { required: "Message is required!" })}
							/>

							<FormErrorMessage>{errors.message?.message}</FormErrorMessage>
						</FormControl>
						<Box m={5} />
						<Button type="submit" disabled={isSubmitting}>
							{isSubmitting ? (
								<>
									Sending &nbsp; <Spinner />
								</>
							) : (
								"Send"
							)}
						</Button>
					</form>
				</Card>
			</Box>
		</div>
	);
}
