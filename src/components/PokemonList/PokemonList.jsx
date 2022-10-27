import {  Container,   SimpleGrid, Spinner, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import CardPokemon from "./CardPokemon";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getPokemos} from '../../redux/actions/index';

const PokemonList = (e) => {

    const [pokemons, setPokemon] = useState([]);
    const pokemonRedux = useSelector( (state) => state.pokemosAll );
    const dispatch = useDispatch ();
     

    useEffect(() => {


        dispatch(getPokemos())

        try {
            const result = axios.get('http://localhost:3001/pokemons/');
            result.then((result => {
                setPokemon(result.data.pokemons);
                console.log(result.data.pokemons);
            }))

        } catch (error) {

        }
    },[])



    return (
        <VStack>
            <Container maxW='80%' mt={5} rounded='md' bg='blue.100' >
                <SimpleGrid columns={3} minChildWidth='300px'  p={4}  gap={4} >

                    {pokemonRedux.length !==0 ? pokemonRedux.map(pokemons => (
                        <CardPokemon key={pokemons.id} pokemons={pokemons} />
                    )): ( <Spinner mx={'auto'} width='50px'  height='50px' /> )}




                </SimpleGrid>

            </Container>
        </VStack>
    )
};

export default PokemonList;