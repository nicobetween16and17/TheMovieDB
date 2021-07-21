import React, {useState, useEffect} from 'react';
import { Text,ScrollView,View, Button} from 'react-native';
import LoginScreen from './loginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home=()=>{   
    const[signed, setsigned] = useState(false);
    const[user, setuser] = useState("");
    const[address, setaddress] = useState("");


    // save user prefs
    useEffect(async () => {
    console.log("saving user data");
    
            try {
                await AsyncStorage.setItem('USERNAME', user);
                await AsyncStorage.setItem('ADDRESS', address);
                console.log('storing user data');
                const value = await AsyncStorage.getItem('USERNAME');
                console.log('saved username :', value);
            } catch (e) {
            console.log('unable to save user data');
            }
        
    },[user])
    
    //retrieving user data
    useEffect(async () => {
        try {
            console.log("retrieving user data");
            const value = await AsyncStorage.getItem('USERNAME');
            if (value !== null) {setuser(value)}
            
            console.log('user : ', value);
            }
        catch (e) {
        console.log('error while reading value');
        }
    },[])


    const handleUserLog = (userName,userAddress) =>{
        if(userName !== null){
            setsigned(true);
            setuser(userName)
        }
        if(userAddress !== null) setaddress(userAddress)
    }
    return(
        <>
        <View style = {{flex: 1}}>
         {(signed) ? (
             <View>
                <Text style={{fontSize:25, fontWeight:"bold"}}>Welcome, {user}!</Text>
                <Text>Your favorites :</Text>
                {/* <Favorites/> */}
                <Text>Your last seen :</Text>
                {/* <LastSearched/> */}
             </View>
         ):(
         <LoginScreen getUserData={(userName, userAddress, stayLogged)=>handleUserLog(userName, userAddress, stayLogged)}/>)}
        </View>
        </>
    );
}
export default Home;