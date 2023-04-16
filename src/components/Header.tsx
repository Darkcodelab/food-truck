import { Link } from "@chakra-ui/next-js";
import { Flex, Box, Spacer, Image, Container, Hide } from "@chakra-ui/react";

// assets
import Logo from "@/assets/logo.png";

export default function Header() {
  return (
    <Container
      as="header"
      maxW="container.xl"
      padding="10px"
      maxWidth="100%"
      position="absolute"
      zIndex="2"
    >
      <Flex alignItems="center">
        <Hide below="md">
          <Box>
            <Image src={Logo.src} alt="Food Truck" />
          </Box>
        </Hide>
        <Spacer />
        <Box>
          <Link
            href="/"
            border="1px"
            borderColor="white"
            color="white"
            p="3"
            borderRadius="full"
            _hover={{ textDecoration: "none" }}
            display="block"
          >
            Get In Touch
          </Link>
        </Box>
      </Flex>
    </Container>
  );
}
