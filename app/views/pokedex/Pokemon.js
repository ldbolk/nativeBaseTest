import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native' // Have to use this because you can't pass navigation into the childcomponents (would work in a button tho)

import * as Styles from '../../resources/styles/Styles'

import { Box, Input, View, ScrollView, Image, Text } from 'native-base';


const pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        fetchPokemon();
    }, []);

    const fetchPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
        .then(response => response.json())
        .then(pokemon => setPokemon(pokemon.results))
    };

    const navigation = useNavigation();
    
    return (        
        <Box
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}>
            <View>
                                            {/* value is set to searchfield which is then used as search upon changing text */}
                <Input style={Styles.searchField} variant="rounded" placeholder="Search..." onChangeText={value => setSearchfield(value)} value={searchfield} />
            </View>
            <ScrollView>
                <View style={Styles.Pcontainer}>
                    {pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(searchfield.toLowerCase()))
                    .map((pokemon, index) => {
                        return(
                            <TouchableOpacity
                                activeOpacity={0.5}
                                key={index}
                                style={Styles.card}
                                onPress={() => navigation.navigate('Details', {pokemon: pokemon.name})}
                            >
                                <Image 
                                    style={{ width: 150, height: 150 }}
                                    source={{ uri: `https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png` }}
                                    alt={"Alternate Text"}
                                />
                                <Text>{pokemon.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
        </Box>
    )
}

export default pokemon