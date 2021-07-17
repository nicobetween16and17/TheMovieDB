import React, { Component } from 'react';
import { Text,ScrollView,View, Button} from 'react-native';
Home=()=>{
    return(
        <>
        <View>
            <Text style={{textAlign:'center'}}>Already signed ?</Text>
        <Button title='Sign in'/>
            <Text style={{textAlign:'center'}}>Still not signed yet ?</Text>
        <Button title='Sign up'/>
            
  
        </View>
        </>
    );
}
export default Home;