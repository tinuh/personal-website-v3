import React from "react";
import { Box } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

export default function Footer() {
  const { colorMode } = useColorMode();

	return (
		<Box
			p={5}
      className={`main-inner-box-${colorMode}`}
      style={{position: "fixed", bottom: 0, width: "100%", textAlign: "center", borderRadius: 0}}
		>
			Copyright © 2024 Tinu Vanapamula
		</Box>
	);
}
