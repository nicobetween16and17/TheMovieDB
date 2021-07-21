import React, { Component, useState, useEffect } from 'react';
import { Text, ScrollView, View, Button, FlatList, Image, TouchableHighlight } from 'react-native';
import Fiche from './FicheFilm';
import Pop from './pop';
const Filmdetail = (props) => {
    const [displayList, setdisplayList] = useState(true)
    const [id, setid] = useState()
    const imgurl = 'https://image.tmdb.org/t/p/w300/'
    const Imagelink = (props) => {
        return (imgurl.concat(props)).toString()
    }
    const detail = (element) => {
        setdisplayList(false)
        setid(element)
        console.log('DISPLAY ?', displayList);


    }
    return (
        <>
            <View >
                {displayList ?
                    (<FlatList
                        data={props.list}
                        keyExtractor={(item) => item.id}
                        renderItem={(element) => {
                            return <TouchableHighlight onPress={() => detail(element.item.id)}>
                                <View style={{ flexDirection: 'row', height: 180, backgroundColor: 'grey' }} >

                                    <View>
                                        <Image style={{ width: 100, height: 150 }} source={{ uri: Imagelink(element.item.poster_path) }} />
                                    </View>
                                    <View>
                                        <Text > Titre:  {element.item.original_title}</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        }} />)
                    :
                    (<View style={{backgroundColor:'red'}}> 
                        <Text>AVANT BOUTON</Text>
                        <Fiche  id={id} />
                        <Button title='Go Back' onPress={() => setdisplayList(true)} />
                        <Text>APRES BOUTON</Text>
                    </View>)}
            </View>
        </>
    );
}
export default Filmdetail;