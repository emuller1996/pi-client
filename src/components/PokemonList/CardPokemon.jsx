import { Box, Image, Progress, SimpleGrid, Stat, StatHelpText, StatLabel, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function CardPokemon({ pokemons }) {



    return (
        <>
            <Link to={`/pokemon/${pokemons.id}`}>
                <Box
                    key={pokemons.id}
                    boxShadow='1x1'
                    rounded='md'
                    bg='yellow.300'
                    p={4}
                    border={'1px'}
                    borderColor={'blue.700'}
                    _hover={{ bg: 'blue.100', boxShadow: '2xl' }}
                    display='flex'
                >

                    <Box width={'50%'}>
                        <Text fontSize='2xl' textAlign={"center"} color='blue.800' fontWeight='bold'> {pokemons.name}</Text>
                        <Image height={"12em"} src={pokemons.img} alt='Dan Abramov' />
                    </Box>
                    <Box width={'50%'} border={'1px'} borderColor={'facebook'} rounded='0.5em' shadow={'md'} ml={'1em'} bgColor={'blue.100'}>
                        <SimpleGrid columns={1} p={2} spacing={0} gap={2}>
                            <Text fontWeight={'semibold'}>HP</Text>
                            <Progress w={"100%"} rounded={'0.3em'} hasStripe colorScheme={'facebook'} bgColor={'white'} value={pokemons.vida} />
                        </SimpleGrid>
                        <SimpleGrid columns={1} p={2} spacing={0} gap={2}>
                            <Text fontWeight={'semibold'}>Attack:</Text>
                            <Progress w={"100%"} rounded={'0.3em'} hasStripe colorScheme={'facebook'} bgColor={'white'} value={pokemons.ataque} />
                        </SimpleGrid>


                        <Stat p={2}>
                            <StatLabel>Types</StatLabel>
                            {pokemons.types && pokemons.types.map(type => (
                                <StatHelpText key={type.slot} fontSize={'1em'} m='0' fontWeight={'bold'} >{` • ${type.type.name}`}</StatHelpText>
                            ))}
                        </Stat>
                    </Box>





                </Box>
            </Link>

        </>
    )
}