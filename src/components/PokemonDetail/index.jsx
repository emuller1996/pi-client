import { Box, Container, Progress, SimpleGrid, Stat, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPokemonDetalle } from "../../redux/actions/index";

export default function PokemonDetail(props) {

    let { id } = useParams();
    const dispatch = useDispatch();
    const PokemonDetail = useSelector(state => state.pokemonDetalle)

    useEffect(() => {
        const detail = async () => {
            await dispatch(getPokemonDetalle(id));

        }
        detail();
    }, [dispatch,id,PokemonDetail])






    return (

        <>
            <VStack bgColor={'blue.50'} height="100vh">
                <Container maxW='80%' mt={5} rounded='md' bg='blue.100' >
                    <SimpleGrid minChildWidth={'400px'} columns={2} spacing={10}>
                        <Box p={4}>
                            <img style={{ maxWidth: '500px', maxHeight: '500px', minWidth: '400px', minHeight: '400px' }} src={PokemonDetail.sprites ? PokemonDetail.sprites.other.dream_world.front_default : 's'} alt="" />
                        </Box>
                        <Box >
                            <Text fontSize={'3em'} fontWeight='bold' > {PokemonDetail.name}</Text>
                            <Box border={'2px'} borderColor='facebook' shadow={'inner'} p="2" rounded='0.5em' >
                                <Text fontSize={'1.5em'} fontWeight='bold' > Stats </Text>
                                <SimpleGrid columns={2} spacing={10} gap={4}>
                                    {
                                        PokemonDetail.stats ? PokemonDetail.stats.map(s => (
                                            <Box key={s.stat.name}>
                                                <Stat>
                                                    <StatLabel>{s.stat.name}</StatLabel>
                                                    <Progress w={"100%"} rounded={'0.3em'} hasStripe colorScheme={'facebook'} bgColor={'white'} value={s.base_stat} />

                                                </Stat>

                                            </Box>
                                        ))
                                            : '. . .Loading'
                                    }
                                </SimpleGrid>
                            </Box>
                            <Box display="flex" ml='4'>
                                <Stat mt='3'>
                                    <StatLabel>Weight</StatLabel>
                                    <StatNumber>{PokemonDetail.weight}</StatNumber>
                                </Stat>
                                <Stat mt='3'>
                                    <StatLabel>Height</StatLabel>
                                    <StatNumber>{PokemonDetail.height}</StatNumber>
                                </Stat>
                                <Stat mt='3'>
                                    <StatLabel>Base experience</StatLabel>
                                    <StatNumber>{PokemonDetail.base_experience}</StatNumber>
                                </Stat>
                            </Box>
                            <Box p="2" >
                                <Text fontSize={'1.5em'} fontWeight='bold' > Abilities </Text>
                                <SimpleGrid columns={2} spacing={10} gap={4}>
                                    {
                                        PokemonDetail.abilities ? PokemonDetail.abilities.map(a => (
                                            <Box key={a.ability.name}>
                                                <Stat mt='0'>
                                                    <StatLabel>{a.ability.name}</StatLabel>
                                                </Stat>
                                            </Box>
                                        )) : '... Cargando'

                                    }


                                </SimpleGrid>
                            </Box>

                        </Box>

                    </SimpleGrid>
                </Container>
            </VStack>

        </>
    )
}