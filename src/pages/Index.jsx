import { Box, Button, FormControl, FormLabel, Input, Text, VStack, useToast } from "@chakra-ui/react";
import { FaPrint } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    email: "",
    sampleInfo: "",
    uniqueNumber: Math.floor(Math.random() * 1000000),
  });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate email sending and form submission
    toast({
      title: "Form Submitted",
      description: "Your tracking number and shipping label are being processed.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handlePrintLabel = () => {
    window.print();
  };

  return (
    <Box bg="#002F5D" minH="100vh" p={8} color="white">
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Text fontSize="2xl" mb={4}>
          Sample Request Form
        </Text>

        <FormControl isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input name="email" type="email" placeholder="Enter your email" onChange={handleChange} bg="white" color="black" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Sample Information</FormLabel>
          <Input name="sampleInfo" placeholder="Describe the sample" onChange={handleChange} bg="white" color="black" />
        </FormControl>

        <Button type="submit" colorScheme="green" bg="#6CB42C" size="lg" mt={4}>
          Submit
        </Button>

        {formData.email && (
          <Box mt={4}>
            <Text>Your unique tracking number: {formData.uniqueNumber}</Text>
            <Button leftIcon={<FaPrint />} colorScheme="green" bg="#6CB42C" onClick={handlePrintLabel}>
              Print Shipping Label
            </Button>
            <Text mt={2}>Address: Cyklop CSC Att.: SampleLab M.Slot [{formData.uniqueNumber}] Wilhelm Röntgenstraat 10, 8013NC, Zwolle, Nederland</Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
