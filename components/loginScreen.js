import React from 'react';
import {View, Text, Button, TextInput, Form} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const LoginScreen = () => {
  const nav = useNavigation();
  const [userName, setuserName] = useState('');
  const [userAddress, setuserAddress] = useState('');
  const [stayLogged, setstayLogged] = useState(false);
  const handleNameInput = () => {
    setuserName(target.value);
  };
  const handleMailInput = () => {
    setuserAddress(target.value);
  };
  const logNewUser = () => {
    nav.navigate('Home', {userName, userAddress});
    // TODO  (stayLogged) ??  sauvegarder les login
  };
  const continueUnlogged = () => {
    nav.navigate('home');
  };

  return (
    <View>
      <Text>Sign in :</Text>
      <Form onSubmit={logNewUser}>
        <TextInput
          onChange={handleNameInput}
          value={userName}
          placeholder="Your name"
        />
        <TextInput
          onChange={handleMailInput}
          value={userAddress}
          placeholder="Your e-mail"
        />
        <BouncyCheckbox
          name="stayLogged"
          value={stayLogged}
          onPress={value => setstayLogged(!value)}
        />
        <Button title="signIn" type="submit">
          Sign In
        </Button>
      </Form>
      <Button title="continueUnlogged" onPress={continueUnlogged}>
        Continue without Login
      </Button>
    </View>
  );
};
export default LoginScreen;
