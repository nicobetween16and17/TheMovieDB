/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './components/home';
import Search from './components/search';
import Filmdetail from './components/filmDetail';
import Pop from './components/pop';
import Display from './components/AffichageListes';
import Fiche from './components/FicheFilm';

const popPop=()=>{
  return(
    <Fiche id ='460465'/>
    
  )
}

const App= () => {
  const isLoggedIn = false;
  const isDarkMode = useColorScheme() === 'dark';
  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView style= {{flex:1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer initialRouteName='Home'>
       
        <Tab.Navigator >
          <Tab.Screen name="Home" component={Home}/>
          <Tab.Screen name="Search" component={Search}/>
          <Tab.Screen name="New&Trend" component={Display}/>
          <Tab.Screen name= "barbare" component={popPop}/>
        </Tab.Navigator>
       

      
   </NavigationContainer>
    </SafeAreaView>
  );
};


export default App;
