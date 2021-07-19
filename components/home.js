import React, { Component } from 'react';
import { Text,ScrollView,View, Button} from 'react-native';
import PropTypes from "prop-types";

Home=(props)=>{
    const loggedIn = {props}
    return(
        <>
        <View>
            <Text style={{textAlign:'center'}}></Text>
            <Button title='Sign in'/>
            <Text style={{textAlign:'center'}}></Text>
            <Button title='Sign up'/>
        </View>
        </>
    );
}
export default Home;