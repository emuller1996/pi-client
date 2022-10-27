import { Box, Button, Center, Fade, ScaleFade, FormControl, SlideFade, Input, Select, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from '../../img/pokemon-logo.png'
import { getPokemonByName, getPokemos } from '../../redux/actions/index';

const Navbar = () => {


  const [nameSeach, setNameSeach] = useState('');
  const pokemonRedux = useSelector((state) => state.pokemosAll);
  const dispatch = useDispatch();
  const { isOpen, onToggle } = useDisclosure()


  const handleState = (e) => {
    setNameSeach(e.target.value);
  }

  const searchPokemon = (name) => {
    if (name === '') {
      dispatch(getPokemos())
    } else {
      dispatch(getPokemonByName(pokemonRedux, name));
    }

    console.log(name);
  }

  return (





    <>
      <Box bg='blue.700' w='100%' p={4} color='yellow.500' shadow={5}>


        <Text align={"left"} p={0} m={0} fontWeight={"bold"} >  PI Henry Estefano Muller</Text>
        <Center>

          <Text>

            <img src={logo} style={{ width: '14em', height: '5em' }} alt="asdsd" />

          </Text>
        </Center>
      </Box>

      <Box bg='blue.500' w='80%' mx={'auto'} rounded={'0.5em'} mt={3} p={4} alignContent={'center'} color='yellow.500' shadow={5}>
        <FormControl display={'flex'} w='80%' textAlign={"center"} mx='auto' >

          <Select onClick={onToggle} placeholder='Select option'>
            <ScaleFade initialScale={0.9} in={isOpen}>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </ScaleFade>
          </Select>


          {/* <Button onClick={onToggle}>Click Me</Button>
          <ScaleFade initialScale={0.9} in={isOpen}>
            <Box
              p='40px'
              color='white'
              mt='4'
              bg='teal.500'
              rounded='md'
              shadow='md'
            >
              Fade
            </Box>
          </ScaleFade> */}
          <Input type='text' bg='blue.100' onChange={e => handleState(e)} value={nameSeach} color={'blue.800'} fontWeight={'semibold'} focusBorderColor={'blue.800'} placeholder={'Search your favorite pokemon'} />
          <Button onClick={() => searchPokemon(nameSeach)} ml={'4'} colorScheme='yellow' border={'1px'} borderColor='blue.700' backgroundColor={'yellow.300'} color='blue.700' >Search</Button>
        </FormControl>

      </Box>
    </>
  )
};

export default Navbar;