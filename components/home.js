import React, { Component } from 'react';
import { Text,ScrollView,View, Button} from 'react-native';
import LoginScreen from './loginScreen';

const Home=()=>{
    const [loggedin,setloggedin]=useState(false) ;
    return(
        <>
        <View style = {{flex: 1}}>
         {(loggedin) ? (
             <View>
             <Text>My favorites :</Text>
             //<Favorites/>
             <Text>Last seen :</Text>
             //<LastSearched/>
             </View>
         ):(
         <LoginScreen/>)}
        </View>
        </>
    );
}
export default Home;