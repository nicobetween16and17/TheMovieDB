import React, { Component } from 'react';
import { Text,ScrollView,View, Button} from 'react-native';
import LoginScreen from './loginScreen';
const Home=(props)=>{
    const loggedin = props;
    return(
        <>
        <View>
         <LoginScreen/>
        </View>
        </>
    );
}
export default Home;