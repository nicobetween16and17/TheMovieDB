import React, { useState,useEffect } from 'react';
import { Text, View, Button, TextInput, FlatList,Image } from 'react-native';
import Filmdetail from './filmDetail';
const Search = () => {
  const [title, setTitle] = useState('');
  const [input, setinput] = useState('')
  const [liste, setListe] = useState([])
 
  const key = 'df278855c9e419d222b1ccf697f4f985'
  

const searchMovie = (inputs) => {
  if(inputs!==title){
    
    console.log('AVANT_SET','input: '+inputs,'title: '+title);
    setTitle(inputs)
   
  console.log('APRES_SET','input: '+inputs,'title: '+title)
    const API = 'https://api.themoviedb.org/3/search/movie?api_key=' + key+'&language=fr&query=' +input+'&page=1'
    
    fetch(API)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.results
      })
      .then((results) => {
        setListe(results)
        console.log('List seted !');
        console.log('------------')
       
      }).catch(function (error) {
        console.log('erreur POP', error)
      })
  }else{
    console.log('MEME REQUETE')
  }
  }
  
  return (
    <View>
      <Text>Search a movie :</Text>
      <TextInput
        onChangeText={input => setinput(input)}
        value={input}
        placeholder="Movie title"
      />
      <Button title="Search movie" onPress={searchMovie(input)} hidden='true'/>
      <Filmdetail list={liste}/>
      
    </View>
  );
};
export default Search;
