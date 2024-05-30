import { Container, Text, VStack, Heading, Box, Image, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = ({ posts }) => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
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