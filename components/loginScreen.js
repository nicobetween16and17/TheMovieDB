import React from 'react';
import { Text,ScrollView,View, Button, TextInput} from 'react-native';
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

    return(
        <div>
            <Text>Sign in :</Text>
            <TextInput onChange={handleNameInput} value={userName} placeholder="Your name"/>
            <TextInput onChange={handleMailInput} value={userAddress} placeholder="Your e-mail"/>
            <CheckBox name="stayLogged" value={stayLogged} onValueChange={(value) => setstayLogged(!value)}/>
        </div>
    )
}
export default LoginScreen