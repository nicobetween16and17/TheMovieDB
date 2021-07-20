import React, { Component } from 'react';
import { Text,ScrollView,View,Button } from 'react-native';
const List=(props)=>{
    ListJSX = props.map()
    return(
        <>
        {ListJSX}
        </>
    );
}
export default  List;