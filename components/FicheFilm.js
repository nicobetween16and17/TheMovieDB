import React, { Component, useState, useEffect } from 'react';
import { Text, View, Button, } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Item from './item';

const Fiche = (props) => {

    const [liste, setListe] = useState([])
    const key = 'df278855c9e419d222b1ccf697f4f985'
    const API = 'https://api.themoviedb.org/3/movie/' + props.id + '?api_key=' + key + '&language=fr&'
    useEffect(() => {
        console.log(API);
        fetch(API)

            .then((response) => response.json())
            .then((results) => {

                setListe(results)
                //console.log(results)
            }).catch(function (error) {
                console.log('erreur POP', error)
            })
    }, []);
    return (
        <>
            <View style={{ flex: 1,backgroundColor:'yellow'}}>
                <Text>FICHE</Text>
                <FlatList
                    data={liste}
                    keyExtractor={(list) => list.id}
                    renderItem={(list) => {
                        console.log('BRRR');
                        console.log('TEST',list.original_title)
                        return(
                            <View>
                            <Text> HEY
                            {list.original_title}</Text>
                            <Item
                            movieTitleOriginal={list.original_title}
                            movieTitleFr={list.title}
                            genres={list.genres}
                            releaseYear={list.release_date}
                            synopsis={list.overview}
                            evaluation={list.vote_average}
                            poster={list.poster_path}
                            production={list.production_companies}
                        />
                        </View>)
                    }}
                />
                <Text>FIN FICHE</Text>

            </View>
        </>
    );
}
export default Fiche