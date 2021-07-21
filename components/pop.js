import React, { useState, useEffect } from 'react';
import { Text, View, FlatList,Image } from 'react-native';

const Pop = (props) => {
    const category = props.category
    console.log('Start !');
    console.log('props', props.category)
    const key = 'df278855c9e419d222b1ccf697f4f985'
    const API = 'https://api.themoviedb.org/3/movie/'+props.category+'?api_key='+key
    console.log(API)
    const imgurl ='https://image.tmdb.org/t/p/w300/'
    const Imagelink =(props)=>{
        console.log('IMAGE_URL: ',imgurl.concat(props))
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
                console.log('List seted !');
                window.location.reload()
            }).catch(function(error){
                console.log('erreur POP',error)
            })

    }, [category])
    
    return (
        <>
        
        
            <View style={{flex:1}}>
                <Text>{category}</Text>
                <FlatList 
                    data={liste}
                    keyExtractor={(item) => item.id}
                    renderItem={(element) => {
                        console.log('Titre:', element.item.title);
                        console.log(element.item.poster_path)
                    return <View style={{flexDirection:'row',height:180,backgroundColor : 'grey'}}>
                                <View>
                                <Image style={{width:100,height:150}}source={{uri: Imagelink(element.item.poster_path)}}/>
                            </View>
                                <View>
                                <Text > Titre:  {element.item.original_title}</Text>
                                </View>
                            </View>
                        } } />
            </View>

        </>
    );
}
export default Pop;