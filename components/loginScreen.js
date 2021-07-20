import React from 'react';
import {View, Text, Button, TextInput } from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const nav = useNavigation();
  const [userName, setuserName] = useState('');
  const [userAddress, setuserAddress] = useState('');
  const [stayLogged, setstayLogged] = useState(false);

  const logNewUser = ({userName, userAddress}) => {
    nav.navigate('Search', {userName, userAddress});
    // TODO  (stayLogged) ??  sauvegarder les login
    if(stayLogged){
      const storeUserData = async ({userName, userAddress}) => {
        try {
          await AsyncStorage.setItem('USERNAME', userName)
          await AsyncStorage.setItem('ADDRESS', userAddress)
        } catch (e) {
            console.log('unable to save user data');
        }
      }
   }
    
  };
  const continueUnlogged = () => {
    nav.navigate('Search');
  };
  const onStartLoading = async () => {
    try {
      const value = await AsyncStorage.getItem('USERNAME')
      const value2 = await AsyncStorage.getItem('ADDRESS')
      if(value !== null && value2!== null) {
        setuserName(value)
        setuserAddress(value2)
      }
    } catch(e) {
      console.log('error while reading value');
    }
  }
  
  

  return (
    <View style={{
      padding: 9,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: stayLogged ? "#34eb83" : "#ffdf87",
      flex: 1,
    }}>
      <Text style={{padding: 10, fontSize: 30}}>Sign in :</Text>
      <TextInput
        onChangeText={text => setuserName(text)}
        value={userName}
        placeholder="Your name"
      />
      <TextInput
        onChangeText={text => setuserAddress(text)}
        value={userAddress}
        placeholder="Your e-mail"
        
      />
      <View style={{
        flexDirection: 'row',
        }}>
        <Text >Remember me : </Text>
        <BouncyCheckbox
          name="stayLogged"
          fillColor="red"
          value={stayLogged}
          onPress={(e) => setstayLogged(!e)}
        />
      </View>
        
      <Button title="Sign In" onPress={logNewUser}/>
      <Text/>
      <Text>By signing in, you can receive personalized suggestions and you will be able to save your favorite movies.</Text>
      <Text style={{
      flex: 1,
    }}/>
      <Button title="Continue without Login" onPress={continueUnlogged} color="#20ab2e"/>
    </View>
  );
};

export default LoginScreen;
