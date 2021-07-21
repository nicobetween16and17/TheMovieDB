import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View, Button, FlatList } from 'react-native';

const Pop = (props) => {
    // console.log('Start !');
    // console.log('props', props.category)
    const key = 'df278855c9e419d222b1ccf697f4f985'
    const API = 'https://api.themoviedb.org/3/movie/'+props.category+'?api_key='+key
    const [liste, setListe] = useState([])
    useEffect(() => {
        //  console.log('Effect !');

        fetch(API)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson.results);
                return responseJson.results
                
            })
            .then((results) => {
                // console.log('test',results[0].title,'test2',results[0].id)
                setListe(results)
            }).catch(function(error){
                console.log('erreur POP',error)
            })

    }, [])
    
    return (
        <>
            {console.log('Render')}
            <View style={{flex:1}}>
                <Text>{props.test}</Text>
                <FlatList 
                    data={liste}
                    keyExtractor={(item) => item.id}
                    renderItem={(element) => {
                        // console.log('item', element);
                    return <Text style={{backgroundColor : 'yellow'}}> Titre:  {element.item.original_title}</Text>
                } } />
            </View>

        </>
    );
}
export default Pop;