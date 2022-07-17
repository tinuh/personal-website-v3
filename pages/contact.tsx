import { Heading } from "@chakra-ui/layout";
import React from "react";
import Typewriter from "typewriter-effect";
import { Textarea, useColorMode } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
	Stack
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";
import { useForm } from "react-hook-form";

export default function Contact() {
  interface formData {
    name: string;
    email: string;
    message: string;
  }

  const { colorMode } = useColorMode();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = (data: formData) => {
    console.log(data);
    alert(JSON.stringify(data));
    //Make a post request to cloudflare worker
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
      <Box className="main-outer-box" mt={10}>
        <Box
          className={`main-inner-box-${colorMode}`}
          borderRadius="lg"
          p={10}
          textAlign="center"
        >
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
                  {...register("name", { required: "Name is required!", minLength: {
										value: 2, 
										message: "Name must be at least 2 characters long!"
									} })}
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
                  {...register("email", { required: "Email is required!", pattern: {
										value: /\S+@\S+\.\S+/,
										message: "Please enter a valid email address!"
									} })}
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
            <Button type="submit">Send</Button>
          </form>
        </Box>
      </Box>
    </div>
  );
}
