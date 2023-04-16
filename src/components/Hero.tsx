import {
  Container,
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

// assets
import Curve from "@/assets/curve.png";
import HeroImage from "@/assets/hero.png";

const CurveWrapper = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

export default function Hero() {
  const [isLgScreen] = useMediaQuery("(min-width: 992px)");
  return (
    <Container as="section" maxW="container.2xl">
      <CurveWrapper>
        <Image src={Curve.src} alt="curve" />
      </CurveWrapper>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDirection={isLgScreen ? "row" : "column-reverse"}
      >
        {/* Text part */}
        <Box
          maxW="500px"
          textAlign={!isLgScreen ? "center" : "left"}
          margin="0 auto"
          w={{ base: "100%", lg: "50%" }}
        >
          <Heading as="h1" fontSize="6xl" color="accent">
            Discover the{" "}
            <Text as="strong" color="brand">
              Best
            </Text>{" "}
            Food and Drinks
          </Heading>
          <Text margin="15px 0 30px 0" color="#444957">
            Naturally made Healthcare Products for the better care &amp; support
            of your body
          </Text>
          <Button bg="brand" color="white" borderRadius="full" size="lg">
            Explore Now!
          </Button>
        </Box>

        {/* Image part */}
        <Box w={{ base: "100%", lg: "50%" }}>
          <Image
            src={HeroImage.src}
            alt="pizza"
            zIndex="-3"
            position="relative"
            maxWidth="100%"
          />
        </Box>
      </Flex>
    </Container>
  );
}
