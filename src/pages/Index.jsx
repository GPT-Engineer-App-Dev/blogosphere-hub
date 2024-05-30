import { Container, Text, VStack, Heading, Box, Image, Link, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = ({ posts }) => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bg} color={color}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Text fontSize="lg">Sharing my thoughts, experiences, and stories.</Text>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <Text fontSize="md">
          Dive into my latest posts and feel free to leave your comments. 
          <Link color="teal.500" as={RouterLink} to="/posts"> Check out my posts!</Link>
        </Text>
        <Button onClick={toggleColorMode} colorScheme="teal">
          Toggle {useColorModeValue("Dark", "Light")} Mode
        </Button>
        <Button as={RouterLink} to="/add-post" colorScheme="teal">Add New Post</Button>
        <VStack spacing={4} mt={10} width="100%">
          {posts.map((post, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%">
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;