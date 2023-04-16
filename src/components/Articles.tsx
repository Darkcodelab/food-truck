import { useState } from "react";
import {
  Container,
  Flex,
  Heading,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";

import styled from "@emotion/styled";

// assets
import Article1 from "../assets/article-1.png";
import Article2 from "../assets/article-2.png";
import Article3 from "../assets/article-3.png";
import Article4 from "../assets/article-4.png";
import Article5 from "../assets/article-5.png";
import Article6 from "../assets/article-6.png";

type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const articles: Article[] = [
  {
    id: 0,
    title: "Grilled Tomatoes at Home",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro officiis nobis, ullam vel eius fuga vitae explicabo omnis natus vero.",
    image: Article1.src,
  },
  {
    id: 1,
    title: "Snacks for Travel",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro officiis nobis, ullam vel eius fuga vitae explicabo omnis natus vero.",
    image: Article2.src,
  },
  {
    id: 2,
    title: "Post-workout Recipes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro officiis nobis, ullam vel eius fuga vitae explicabo omnis natus vero.",
    image: Article3.src,
  },
  {
    id: 3,
    title: "How To Grill Corn",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro officiis nobis, ullam vel eius fuga vitae explicabo omnis natus vero.",
    image: Article4.src,
  },
  {
    id: 4,
    title: "Crunchwrap Supreme",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro officiis nobis, ullam vel eius fuga vitae explicabo omnis natus vero.",
    image: Article5.src,
  },
  {
    id: 5,
    title: "Broccoli Cheese soup",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro officiis nobis, ullam vel eius fuga vitae explicabo omnis natus vero.",
    image: Article6.src,
  },
];

function ArticleCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image} alt={title} borderRadius="lg" w="full" />
        <Stack mt="6">
          <Heading size="md" color="accent" fontSize="xl">
            {title}
          </Heading>
          <Text padding="20px 0" color="#444957" fontSize="sm">
            {description}
          </Text>
          <Button variant="outline" borderRadius="999px" alignSelf="flex-start">
            Read More
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default function Articles() {
  const [startIdx, setStartIdx] = useState(0);
  const updateCardsPage = (type: string) => {
    if (type === "INC") {
      const newState = startIdx + 3;
      if (newState < articles.length) {
        setStartIdx(newState);
      }
    } else if (type === "DEC") {
      const newState = startIdx - 3;
      if (newState >= 0) {
        setStartIdx(newState);
      }
    }
  };

  const PaginationButtonLeft = styled(Button)`
    background: #eee;
    color: ${startIdx === 0 ? "#bbb" : "#000"};
  `;
  const PaginationButtonRight = styled(Button)`
    background: #eee;
    color: ${startIdx + 3 === articles.length ? "#bbb" : "#000"};
  `;

  return (
    <Container
      as="section"
      marginTop={{ base: "100px", md: "150px" }}
      maxW="100%"
    >
      <Heading fontSize="4xl" color="accent" fontWeight={700}>
        Latest Articles
      </Heading>
      <Flex
        flexWrap="wrap"
        gap="20px"
        justifyContent="space-around"
        margin="40px auto 0"
        maxW="1440px"
      >
        {articles
          .slice(startIdx, startIdx + 3)
          .map(({ id, description, image, title }) => {
            return (
              <ArticleCard
                key={id}
                description={description}
                image={image}
                title={title}
              />
            );
          })}
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        marginTop="40px"
        gap="10px"
      >
        <PaginationButtonLeft size="sm" onClick={() => updateCardsPage("DEC")}>
          &lt;
        </PaginationButtonLeft>
        <Text>
          {(startIdx + 3) / 3}/{articles.length / 3}
        </Text>
        <PaginationButtonRight size="sm" onClick={() => updateCardsPage("INC")}>
          &gt;
        </PaginationButtonRight>
      </Flex>
    </Container>
  );
}
