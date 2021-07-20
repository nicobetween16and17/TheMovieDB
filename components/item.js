import react from 'react'
import { useNavigation } from 'react-navigation/native'
import { View, Text, Image, Stylesheet} from 'react-native'
import globalStyle from '../../global-style'


Item = (props) => {
    const {
        movieTitleOriginal, movieTitleFr, genres, releaseYear, synopsis, producers, evaluation, poster
    } = props

    return (
        
        <View>
            <image name='poster' src ={require(poster)}/>
            <text>{movieTitleOriginal}</text>
            <text>{movieTitleFr}</text>
            <text>{genres}</text>
            <text>{releaseYear}</text>
            <text>{synopsis}</text>
            <text>{evaluation}</text>
        </View>
    );
}
export default Item