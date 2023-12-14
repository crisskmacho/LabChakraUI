import React from 'react'
import { Box, Heading, Stack } from "@chakra-ui/react";
import supraImage from "../img/supra.jpg";
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function Header() {
  return (
    <Box
        pos='relative'
        backgroundImage={`url(${supraImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        height="200px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="md"
    > 

        <Heading
            pos="absolute"
            textAlign="center"
            color="white"
            as='b'
            fontSize='40px'
            pb='40px'
            
        > 
            SupraManía
        </Heading>


        <Stack direction='column'>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                width='100%'
                py={12}
                mb={-10}
                mt={5}
            >
                <ButtonGroup gap='4'>
                <Button colorScheme='whiteAlpha'>VER DETALLES</Button>
                <Button color='WhiteAlpha'>VER VIDEO</Button>
                </ButtonGroup>
            </Box>
        </Stack>

    </Box>
  )
}
