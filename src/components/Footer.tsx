import {
  Box,
  Container,
  Flex,
  Image,
  Heading,
  Text,
  Icon,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Link } from "@chakra-ui/next-js";

// icons
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const FooterBox = styled(Box)`
  flex: 1;
  font-size: 14px;
  padding: 10px;
`;

// assets
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <Container
      as="footer"
      maxW="100%"
      bg="#F8F8F8"
      marginTop={{ base: "70px", md: "100px" }}
      padding="60px 0"
    >
      <Flex
        maxW="1400px"
        margin="0 auto"
        w="full"
        justifyContent="space-between"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <FooterBox alignSelf={{ base: "center", lg: "flex-start" }}>
          <Image src={Logo.src} alt="Food Truck" />
        </FooterBox>
        <FooterBox>
          <Heading as="h4" fontSize="lg" color="accent" marginBottom="20px">
            Contact Us
          </Heading>
          <Box>
            <Text>
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </Text>
            <Text padding="10px 0">example202@gmail.com</Text>
            <Text>(904)-443-0343</Text>
          </Box>
        </FooterBox>
        <FooterBox textAlign={{ base: "left", lg: "center" }}>
          <Heading as="h4" fontSize="lg" color="accent" marginBottom="20px">
            More
          </Heading>
          <Flex flexDirection="column" gap="10px">
            <Link href="/">About Us</Link>
            <Link href="/">Products</Link>
            <Link href="/">Careers</Link>
          </Flex>
        </FooterBox>
        <FooterBox
          textAlign={{ base: "center", lg: "left" }}
          alignSelf={{ base: "center", lg: "flex-start" }}
        >
          <Heading as="h4" fontSize="lg" color="accent" marginBottom="20px">
            Social Links
          </Heading>
          <Flex
            as="div"
            alignItems="center"
            gap="16px"
            justifyContent={{ base: "center", lg: "flex-start" }}
          >
            <Icon as={BsInstagram} />
            <Icon as={BsTwitter} />
            <Icon as={BsFacebook} />
          </Flex>
          <Text marginTop="30px">&copy; 2022 Food Truck Example</Text>
        </FooterBox>
      </Flex>
    </Container>
  );
}
