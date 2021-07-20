import react from 'react'
import { useNavigation } from 'react-navigation/native'
import { View, Text, Image, Stylesheet} from 'react-native'
import Style from './style'



Item = (props) => {
    const {
        movieTitleOriginal, movieTitleFr, genres, releaseYear, synopsis, evaluation, poster, production
    } = props

    const nav = useNavigation();

    const onPressBtn = () => {
        nav.navigate('acteurRealisateur');
    };

    return (
        
        <View style={}>
        <View style={}>
                <Image style={} 
                source={{uri: `https://image.tmdb.org/t/p/w500/${poster}.jpg`}} />
            <Text style={}>movieTitleOriginal: {movieTitleOriginal}</Text>
            <Text style={}>Titre fraçais: {movieTitleFr}</Text>
            <Text style={}>compagnie de production: {production}</Text>
            <Text style={}>Genre(s): {genres}</Text>
            <Text style={}>Synopsis: {synopsis}</Text>
            <Text style={}>Date de sortie: {releaseYear}</Text>
            
            <Text style={}>Note: {evaluation}</Text>
        </View>
        <Button title="Acteurs / Realisateurs" onPress={onPressBtn} accessibilityLabel="Permet de voir le realisateurs et les acteurs de ce film" />
    </View>
    );
}
export default Item