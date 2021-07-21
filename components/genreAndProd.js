import React, { Component } from 'react';
import { Text,View,FlatList } from 'react-native';

export default GenreAndProd=(liste)=>{
    const [list, setliste] = useState([])
    setliste(liste)
    return(
        <FlatList
        date = {list}
        keyExtractor={item=>item.id}
        renderItem={item=>{
            <View>
            <Text>
                {item.name}
            </Text>
            </View>
        }}
        />
    )
}