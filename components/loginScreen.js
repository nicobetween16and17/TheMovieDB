import React from 'react';
import {View, Text, Button, TextInput, Alert} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PropTypes from 'prop-types';

const LoginScreen = (props) => {
  const nav = useNavigation();
  const [userName, setuserName] = useState('');
  const [userAddress, setuserAddress] = useState('');
  const [stayLogged, setstayLogged] = useState(false);

  //logged -> accueil custom
  const logNewUser = () => {
    console.log('clic');
    console.log(userName, userAddress, stayLogged);
    if(userName !== ""){
      nav.navigate('Home');
      props.getUserData(userName,userAddress, stayLogged)
    } else {
      alert("Please entrer a valid name",
      [
        {text: 'Yes', onPress: () => console.log('Yes button clicked')},
        {text: 'No', onPress: () => console.log('No button clicked'), style: 'cancel'},
      ], 
      {cancelable: true})
    }
    
    }


  //non logged -> direction search
  const continueUnlogged = () => {
    nav.navigate('Search');
  };
  const onStartLoading = async () => {
    console.log("looking for user data");
    try {
      const value = await AsyncStorage.getItem('USERNAME');
      const value2 = await AsyncStorage.getItem('ADDRESS');
      if (value !== null && value2 !== null) {
        setuserName(value);
        setuserAddress(value2);
        console.log(value, ' // ', value2);
      }
    } catch (e) {
      console.log('error while reading value');
    }
  };

  return (
    <View
      style={{
        padding: 9,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: stayLogged ? '#34eb83' : '#ffdf87',
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
        autoCompleteType="email"
        keyboardType="email-address"
      />
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text>Remember me : </Text>
        <BouncyCheckbox
          isChecked={stayLogged}
          name="stayLogged"
          fillColor="blue"
          onPress={e => setstayLogged(e)}
        />
      </View>

      <Button title="Sign In" onPress={logNewUser} />
      <Text />
      <Text>
        By signing in, you can receive personalized suggestions and you will be
        able to save your favorite movies.
      </Text>
      <Text
        style={{
          flex: 1,
        }}
      />
      <Button
        title="Continue without Login"
        onPress={continueUnlogged}
        color="#20ab2e"
      />
    </View>
  );
};

export default LoginScreen;

LoginScreen.propTypes = {
  getUserData : PropTypes.func
}
LoginScreen.defaultProps = {
  getUserData : () => {}
}
