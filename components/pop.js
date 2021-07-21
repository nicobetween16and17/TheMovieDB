import React, { useState, useEffect } from 'react';
import { Text, View, FlatList,Image } from 'react-native';
import Filmdetail from './filmDetail';

const Pop = (props) => {
    const category = props.category
   
    const key = 'df278855c9e419d222b1ccf697f4f985'
    const API = 'https://api.themoviedb.org/3/movie/'+props.category+'?api_key='+key+'&language=fr&'
    const imgurl ='https://image.tmdb.org/t/p/w300/'
    const Imagelink =(props)=>{
        
        return (imgurl.concat(props)).toString()
    }
    
  
    const [liste, setListe] = useState([])
    useEffect(() => {
         

        fetch(API)
            .then((response) => response.json())
            .then((responseJson) => {
                
                return responseJson.results
                
            })
            .then((results) => {
                setListe(results)
                
                window.location.reload()
            }).catch(function(error){
                
            })

    }, [category])
    
    return (
        <>
        
        
            <View style={{flex:1}}>
                <Filmdetail list={liste}/>
                </View>

        </>
    );
}
export default Pop;