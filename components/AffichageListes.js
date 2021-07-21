import React, { useState,useEffect,Component } from 'react';
import { Button, View,Text } from 'react-native';
import Pop from './pop';
const Display = ()=>{
    const [hasclick, sethasclick] = useState(false)
    const [buttonname, setbuttonname] = useState('Popular')
    
    const switchCategory = ()=>{
        console.log('hasclick')
        if(hasclick){
            
            sethasclick(false)
            setbuttonname('New')
        }else{
           
            sethasclick(true)
            setbuttonname('Popular')
        }
        console.log(hasclick);
        
    }
useEffect(() => {
    console.log('Refresh');


    
},[hasclick]);
return (
    <View style={{flex:1,backgroundColor:'white'}}>
        <Button title={buttonname} onPress={switchCategory}/>
      {hasclick ? (
        <View style={{flex:1}}><Pop category='upcoming'/></View>
      ) : (
    
        <View style={{flex:1}}><Pop category='popular'/></View>
      )}
    </View>
  )
}
export default Display;
