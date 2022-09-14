import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { View, Text, Image, Center } from 'native-base';

import * as Styles from '../../resources/styles/Styles';

import { useNavigation } from '@react-navigation/native'


const Details = props => {
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetchPokemonDetails();
    }, []);

    const fetchPokemonDetails = () => {
        const state = props.route;
        fetch(`https://pokeapi.co/api/v2/pokemon/${state.params.pokemon}`)
        .then(res => res.json())
        .then(details => setDetails(details))
    }

    return details.name ? (
        <Center
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "blueGray.50" }}
            px={4}
            flex={1} 
            style={{ flex: 1, alignItems: 'center'}}
        >
            <Image
                style={Styles.image}
                source={{
                    uri: `https://img.pokemondb.net/sprites/home/normal/${details.name}.png`
                }}
                alt={'Alternative Text'}
            />
            <Text style={Styles.text}>Name: {details.name}</Text>
            <Text style={Styles.text}>Height: {details.height}</Text>
            <Text style={Styles.text}>Weight: {details.weight}</Text>
            <Text style={Styles.text}>
                Abilities: {details.abilities[0].ability.name}
            </Text>
            <Text style={Styles.text}>Type: {details.types[0].type.name}</Text>
        </Center>
    ) : (
        <View style={Styles.indicator}>
            <ActivityIndicator size="large" color="#E63F34"/>
        </View>
    )
}

export default Details;