import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, Stylesheet,Button} from 'react-native'

import genreAndProd from './genreAndProd'



Item = (props) => {
    
    const {
        movieTitleOriginal, movieTitleFr, genres, releaseYear, synopsis, evaluation, poster, production
    } = props

    const nav = useNavigation();

    const onPressBtn = () => {
        nav.navigate('acteurRealisateur');
    };

    return (
        
        <View style={{flex:1}}>
        <View>
                <Image
                source={{uri: `https://image.tmdb.org/t/p/w500/${poster}`}} />
            <Text >movieTitleOriginal: {movieTitleOriginal}</Text>
            <Text >Titre fraçais: {movieTitleFr}</Text>
            <Text>compagnie de production: {}</Text>
            <Text >Genre(s): {}</Text>
            <Text >Synopsis: {synopsis}</Text>
            <Text >Date de sortie: {releaseYear}</Text>
            
            <Text>Note: {evaluation}</Text>
        </View>
        <Button title="Acteurs / Realisateurs" onPress={onPressBtn} accessibilityLabel="Permet de voir le realisateurs et les acteurs de ce film" />
    </View>
    );
}
export default Item