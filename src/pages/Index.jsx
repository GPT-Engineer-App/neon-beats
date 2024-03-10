import { Box, Flex, Heading, Text, Button, VStack, HStack, Image, Link, Grid, GridItem, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FaCalendarAlt, FaBlog, FaHeadphones, FaPlay } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const bg = useColorModeValue("gray.800", "gray.800");
  const color = useColorModeValue("teal.300", "teal.300");
  const hoverBg = useColorModeValue("teal.600", "teal.700");

  return (
    <Box bg={bg} color="white" minH="100vh">
      <Flex direction="column" align="center" justify="center" p={8}>
        <Heading as="h1" size="2xl" mt={10} mb={4}>
          DJ Darren East
        </Heading>
        <Text fontSize="xl" mb={6}>
          The Ultimate Club Experience
        </Text>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1461784180009-21121b2f204c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxESiUyMERhcnJlbiUyMEVhc3R8ZW58MHx8fHwxNzEwMDI4OTE1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="DJ Darren East" mb={4} />
        <HStack spacing={5} mb={10}>
          <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" variant="solid">
            Gigs
          </Button>
          <Button leftIcon={<FaHeadphones />} colorScheme="teal" variant="outline">
            Music
          </Button>
          <Button leftIcon={<FaBlog />} colorScheme="teal" variant="ghost">
            Blog
          </Button>
        </HStack>
      </Flex>

      <VStack spacing={8} mb={10}>
        <Section title="Upcoming Events">
          <EventList />
        </Section>

        <Section title="Previous Gigs">
          <PreviousGigs />
        </Section>

        <Section title="Latest Blog Posts">
          <BlogPosts />
        </Section>
      </VStack>
    </Box>
  );
};

const Section = ({ title, children }) => (
  <Box w="full" p={5}>
    <Heading as="h3" size="lg" mb={4} textAlign="center">
      {title}
    </Heading>
    {children}
  </Box>
);

const EventList = () => {
  // Placeholder data, should be replaced with real event data
  const events = [
    { id: 1, name: "Neon Nights", date: "April 25, 2023" },
    { id: 2, name: "Bass Drop", date: "May 10, 2023" },
  ];
  return (
    <VStack>
      {events.map((event) => (
        <Flex key={event.id} justify="space-between" w="full" p={3} bg="gray.700" borderRadius="md" boxShadow="md">
          <Text fontWeight="bold">{event.name}</Text>
          <Text>{event.date}</Text>
        </Flex>
      ))}
    </VStack>
  );
};

const PreviousGigs = () => {
  // Placeholder data, should be replaced with real gig data
  const gigs = [
    { id: 1, name: "Summer Fest", date: "March 15, 2023" },
    { id: 2, name: "Rave Revolution", date: "February 20, 2023" },
  ];
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      {gigs.map((gig) => (
        <GridItem key={gig.id} bg="gray.700" p={4} borderRadius="md" boxShadow="md">
          <Text fontWeight="bold">{gig.name}</Text>
          <Text>{gig.date}</Text>
        </GridItem>
      ))}
    </Grid>
  );
};

const BlogPosts = () => {
  // Placeholder data, should be replaced with real blog post data
  const posts = [
    { id: 1, title: "Mixing Techniques for Beginners", date: "April 1, 2023" },
    { id: 2, title: "Top 10 EDM Tracks of the Month", date: "March 22, 2023" },
  ];
  return (
    <VStack>
      {posts.map((post) => (
        <Flex key={post.id} justify="space-between" w="full" p={3} bg="gray.700" borderRadius="md" boxShadow="md">
          <Text fontWeight="bold">{post.title}</Text>
          <Text>{post.date}</Text>
        </Flex>
      ))}
    </VStack>
  );
};

export default Index;
