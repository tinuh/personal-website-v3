import React from "react";
import Link from "next/link";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Box, Flex, Link as CLink, Text } from "@chakra-ui/layout";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import ColorModeToggle from "./ColorModeToggle";

const Element = (props: { href: string; name: string }) => {
  const { href, name } = props;

  return (
    <Link href={href}>
      <CLink
        px={2}
        py={1}
        margin="auto"
        rounded={"md"}
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

const Ham = (props: { children?: React.ReactNode }) => {
  const { children } = props;

  return (
    <Flex px={3} py={2}>
      <Link href="/">
				<CLink _hover={{textDecoration: "none"}}>
					<Text py={1} fontSize={"1.3rem"}>
						Tinu Vanapamula
					</Text>
				</CLink>
      </Link>

      <Box mr={0} ml="auto">
        <ColorModeToggle ml={3} />
      </Box>
      {children}
    </Flex>
  );
};

const Bar = (props: { children?: React.ReactNode }) => {
  const { children } = props;

  return (
    <Flex px={3} py={2}>
      <Link href="/">
				<CLink _hover={{textDecoration: "none"}}>
					<Text py={1} fontSize={"1.3rem"}>
						Tinu Vanapamula
					</Text>
				</CLink>
      </Link>

      <Box mr={0} ml="auto">
        <Element href="/" name={"Home"} />
        <Element href="/creations" name={"Creations"} />
        <Element href="/contact" name={"Contact"} />

        <ColorModeToggle ml={3} />
      </Box>
      {children}
    </Flex>
  );
};

export default function Nav() {
  const { colorMode } = useColorMode();

  return (
    <Box className={`nav-${colorMode}`}>
      {useBreakpointValue({
        sm: <Bar />,
        base: <Ham />,
      })}
    </Box>
  );
}
