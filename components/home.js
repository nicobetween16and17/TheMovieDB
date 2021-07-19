import React, { Component } from 'react';
import { Text,ScrollView,View, Button} from 'react-native';
import PropTypes from "prop-types";
import LoginScreen from './loginScreen';
import { NavigationContainer } from '@react-navigation/native'


Home=(props)=>{
    const loggedIn = {props}
    return(
        
        <LoginScreen/>
    );
}
export default Home;