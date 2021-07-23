import React, { Component } from 'react';
import { Text,ScrollView,View,Button } from 'react-native';
const List=(props)=>{
    const ListJSX = props.map()
    return(
        <View>
            {ListJSX}
        </View>
    );
}
export default  List;