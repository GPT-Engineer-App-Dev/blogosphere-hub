import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addPost({ title, content });
      toast({
        title: "Post added.",
        description: "Your new post has been added successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/");
    } else {
      toast({
        title: "Error.",
        description: "Both title and content are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" mt={10}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h2" size="xl">Add New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit" colorScheme="teal">Submit</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;