import React from 'react'
import supraCard from "../img/CardSupra.jpg";
import { Box, Button, Heading } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react'

export default function Cards() {
    return (
        <Box
          maxW="300px"
          bgSize="cover"
          bgImage={`url(${supraCard})`}
          borderRadius="lg"
          boxShadow="lg"
          p={6}
          position="relative"
          padding={20}
        >
          {/* Título */}
          <Heading size="md" color="white" mb={4}>
            Supra Manía
          </Heading>
    
          {/* Contenedor para los botones */}
          <Flex direction="column">
    
            {/* Botón 1 */}
            <Button colorScheme="red" variant="outline" Color="white" mb={2}>
              Botón 1
            </Button>
    
            {/* Botón 2 */}
            <Button colorScheme="red" variant="outline" Color="white">
              Botón 2
            </Button>
            
          </Flex>
        </Box>
      );
    };
