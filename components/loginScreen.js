import React from 'react';
import { Text,ScrollView,View, Button, TextInput, Form} from 'react-native';
import { useState } from "react";
import CheckBox from '@react-native-community/checkbox';


const LoginScreen = () => {
    const [userName, setuserName] = useState('');
    const [userAddress, setuserAddress] = useState('');
    const [stayLogged, setstayLogged] = useState(false);
    const handleNameInput = () =>{
        setuserName(target.value)
    }
    const handleMailInput = () =>{
        setuserAddress(target.value)
    }
    const logNewUser = () => {

    }

    return(
        <div>
            <Text>Sign in :</Text>
            <form onSubmit={logNewUser}>
                <TextInput onChange={handleNameInput} value={userName} placeholder="Your name"/>
                <TextInput onChange={handleMailInput} value={userAddress} placeholder="Your e-mail"/>
                <CheckBox name="stayLogged" value={stayLogged} onValueChange={(value) => setstayLogged(!value)}/>
                <Button type="submit">Sign In</Button>
            </form>
            <Button onPress={continueUnlogged}>Continue without Login</Button>
        </div>
    )
}
export default LoginScreen