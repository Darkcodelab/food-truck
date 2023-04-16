import styled from "@emotion/styled";
import {
  Box,
  Button,
  Show,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

// assets
import AboutImage from "../assets/about.png";

const TextBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  @media (max-width: 992px) {
    text-align: center;
    align-items: center;
    padding: 60px 0;
    max-width: 500px;
    margin: 0 auto;
  }
`;

export default function About() {
  return (
    <Container
      as="section"
      bg="#F0F1F7"
      marginTop={{ base: "100px", md: "150px" }}
      maxW="100%"
    >
      <Flex maxW="1200px" margin="0 auto">
        <Show above="lg">
          <Box flex={1}>
            <Image src={AboutImage.src} alt="About section" />
          </Box>
        </Show>
        <Box flex={1}>
          <TextBox>
            <Heading fontSize="4xl" color="accent" fontWeight={700}>
              About Us
            </Heading>
            <Text color="#666" lineHeight="27px" margin="20px 0 30px">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis in iusto maiores temporibus, pariatur quos eligendi
              ullam soluta, consequuntur veniam, dicta deleniti officiis atque
              porro beatae nemo cumque. Architecto, illo. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Saepe, laboriosam.
            </Text>
            <Button
              size="md"
              bg="brand"
              color="white"
              borderRadius="999px"
              _hover={{}}
            >
              Read More
            </Button>
          </TextBox>
        </Box>
      </Flex>
    </Container>
  );
}
