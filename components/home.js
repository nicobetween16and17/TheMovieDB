import React, {useState} from 'react';
import { Text,ScrollView,View, Button} from 'react-native';
import LoginScreen from './loginScreen';

const Home=()=>{   
    const[signed, setsigned] = useState(false);
    const[user, setuser] = useState("");

    const handleUserLog = (userName, userAddress, stayLogged) =>{
        if(userName !== null){
            setsigned(true);
            setuser(userName)
        } 
        if (stayLogged) {
            const storeUserData = async (userName, userAddress) => {
              try {
                console.log('storing user data');
                await AsyncStorage.setItem('USERNAME', userName);
                await AsyncStorage.setItem('ADDRESS', userAddress);
              } catch (e) {
                console.log('unable to save user data');
              }
            }
        }
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
         <LoginScreen getUserData={handleUserLog}/>)}
        </View>
        </>
    );
}
export default Home;