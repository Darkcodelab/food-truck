import styled from "@emotion/styled";
import { Image } from "@chakra-ui/react";
import { Container, Flex, Box, Heading, Text, Button } from "@chakra-ui/react";

// assets
import CurveImage from "../assets/curve.png";
import MainImage from "../assets/hero.png";

const BgImage = styled(Image)`
  position: absolute;
  right: 0;
  top: -1px;
`;

const TextBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled(Box)`
  max-width: 500px;
  width: 100%;
  @media (max-width: 768px) {
    text-align: center;
    padding-top: 30px;
  }
`;

const CTAButton = styled(Button)`
  background: #e23744;
  color: white;
  border: 1px solid #e23744;
  border-radius: 999px;
  transition: all 0.3s ease;
`;

export default function Hero() {
  return (
    <Container as="section" maxW="container.xl" maxWidth="100%" p={0}>
      <Flex
        justifyContent="space-between"
        direction={{ base: "column-reverse", lg: "row" }}
      >
        <TextBox flex={1}>
          <TextWrapper>
            <Heading color="accent" fontSize={{ base: "4xl", lg: "6xl" }}>
              Discover the{" "}
              <Text as="strong" color="brand">
                Best
              </Text>{" "}
              Food and Drinks
            </Heading>
            <Text padding="20px 0 40px">
              Naturally made Heathcare Products for the better care & support of
              your body.
            </Text>
            <CTAButton
              size="lg"
              _hover={{
                color: "#E23744",
                background: "white",
                border: "1px solid #E23744",
              }}
            >
              Explore Now
            </CTAButton>
          </TextWrapper>
        </TextBox>
        <Box>
          <BgImage src={CurveImage.src} alt="Curve" />
          <Image src={MainImage.src} alt="Curve" />
        </Box>
      </Flex>
    </Container>
  );
}
