import React, {useState, useEffect} from 'react';
import { Text, View, Button} from 'react-native';
import LoginScreen from './loginScreen';
import LastSeen from './lastSeen';
import Favorites from './favorites';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home=()=>{   
    const[signed, setsigned] = useState(false);
    const[user, setuser] = useState("");
    const[address, setaddress] = useState("");


    
    //retrieving user data / tâche asynchrone qui récupère les données enregistrées
    useEffect(async () => {
        console.log("retrieving user data");
        const value = await AsyncStorage.getItem('USERNAME');
        if (value !== null) {setuser(value); setsigned(true)}
        //TODO: récupérer la liste des dernières recherches et des favoris
        console.log('user : ', value);
    },[])
    
    // save user prefs
    useEffect(async () => {
    console.log("saving user data");
    if(user !== null){
            try {
                console.log('before saving username :', value);
                await AsyncStorage.setItem('USERNAME', user);
                if(address !== null) await AsyncStorage.setItem('ADDRESS', address);
                console.log('storing user data');
                const value = await AsyncStorage.getItem('USERNAME');
                console.log('saved username :', value);
            } catch (e) {
            console.log('unable to save user data');
            }
    }
    },[user])

    const handleUserLog = (userName,userAddress) =>{
        if(userName !== null){
            setsigned(true);
            setuser(userName)
        }
        if(userAddress !== null) setaddress(userAddress)
    }
    return(
        <>
        <View style = {{flex: 1, padding:10}}>
         {(signed) ? (
             <View>
                <Text style={{fontSize:25, fontWeight:"bold"}}>Welcome, {user}!</Text>
                <View style={{height:30}}/>
                <Text>Your favorites :</Text>
                <Favorites/>
                <View style={{height:30}}/>
                <Text>Your last seen :</Text>
                <LastSeen/>
             </View>
         ):(
         <LoginScreen getUserData={(userName, userAddress, stayLogged)=>handleUserLog(userName, userAddress, stayLogged)}/>)}
        </View>
        </>
    );
}
export default Home;