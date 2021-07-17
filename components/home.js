import React, { Component } from 'react';
import { Text,ScrollView,View, Button} from 'react-native';
Home=()=>{
    return(
        <>
        <View>
            <Text style={{textAlign:'center'}}>Already subbed ?</Text>
        <Button title='Sign in'/>
            <Text style={{textAlign:'center'}}>Still not subbed yet ?</Text>
        <Button title='Sign up'/>
            
  
        </View>
        </>
    );
}
export default Home;