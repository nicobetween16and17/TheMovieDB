import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Button, Text, Image, View } from "react-native";
const ActorDirector = (props) => {

    const {title, actors, director, poster} = props;

    const nav = useNavigation();

    const handleBack = () => {
        nav.goBack();
    }

    return (
            <View>
                <Image source={{uri: `https://image.tmdb.org/t/p/w500/${poster}.jpg`}} />
            <View>
                <Text>Titre: {title}</Text>
                <Text>Realisateur(s): {director}</Text>
                <Text>Acteurs: {actors}</Text>
            </View>
            <Button title='Retour' onPress={handleBack}
                     />
        </View>
    );
}

export default ActorDirector;