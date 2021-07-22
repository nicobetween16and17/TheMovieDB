import React from 'react';
import {View, Text, Button, TextInput, Image} from 'react-native';
import {useEffect } from 'react';
import SQLite, { openDatabase } from 'react-native-sqlite-storage';


const db = SQLite.openDatabase({
    name: 'movieDB.db',
    location: 'default',
    createFromLocation: '~movieDB.db' 
    },
    () => {console.log("open successful");}, // execute if success
    error => {console.log(error)} // execute if error
    );

const Favorites = () => {
    const movieJSON1 = {"adult":false,"backdrop_path":"/rwcEaZghpbt6mV0lRQ9ymz5oM9B.jpg","belongs_to_collection":null,"budget":52000000,"genres":[{"id":18,"name":"Drama"},{"id":80,"name":"Crime"}],"homepage":"","id":640,"imdb_id":"tt0264464","original_language":"en","original_title":"Catch Me If You Can","overview":"A true story about Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars worth of checks as a Pan Am pilot, doctor, and legal prosecutor. An FBI agent makes it his mission to put him behind bars. But Frank not only eludes capture, he revels in the pursuit.","popularity":32.788,"poster_path":"/ctjEj2xM32OvBXCq8zAdK3ZrsAj.jpg","production_companies":[{"id":11084,"logo_path":null,"name":"Parkes/MacDonald Productions","origin_country":""},{"id":367,"logo_path":null,"name":"Kemp Company","origin_country":""},{"id":368,"logo_path":null,"name":"Splendid Pictures","origin_country":""}],"production_countries":[{"iso_3166_1":"US","name":"United States of America"}],"release_date":"2002-12-25","revenue":352114312,"runtime":141,"spoken_languages":[{"english_name":"English","iso_639_1":"en","name":"English"},{"english_name":"French","iso_639_1":"fr","name":"Français"}],"status":"Released","tagline":"The true story of a real fake.","title":"Catch Me If You Can","video":false,"vote_average":7.9,"vote_count":11242}
    const movieJSON2 = {"adult":false,"backdrop_path":"/incigEAw6Dekpk7BeFzb3BYcmCY.jpg","belongs_to_collection":null,"budget":42000000,"genres":[{"id":10749,"name":"Romance"},{"id":35,"name":"Comedy"},{"id":18,"name":"Drama"}],"homepage":"http://www.notting-hill.com/","id":509,"imdb_id":"tt0125439","original_language":"en","original_title":"Notting Hill","overview":"William Thacker is a London bookstore owner whose humdrum existence is thrown into romantic turmoil when famous American actress Anna Scott appears in his shop. A chance encounter over spilled orange juice leads to a kiss that blossoms into a full-blown affair. As the average bloke and glamorous movie star draw closer and closer together, they struggle to reconcile their radically different lifestyles in the name of love.","popularity":13.225,"poster_path":"/cBpef6K40Su2CcBb3c18WdwRFCL.jpg","production_companies":[{"id":283,"logo_path":null,"name":"Notting Hill Pictures","origin_country":""},{"id":10163,"logo_path":"/16KWBMmfPX0aJzDExDrPxSLj0Pg.png","name":"Working Title Films","origin_country":"GB"},{"id":282,"logo_path":null,"name":"Bookshop Productions","origin_country":""},{"id":1382,"logo_path":"/sOg7LGESPH5vCTOIdbMhLuypoLL.png","name":"PolyGram Filmed Entertainment","origin_country":"US"},{"id":33,"logo_path":"/8lvHyhjr8oUKOOy2dKXoALWKdp0.png","name":"Universal Pictures","origin_country":"US"}],"production_countries":[{"iso_3166_1":"GB","name":"United Kingdom"},{"iso_3166_1":"US","name":"United States of America"}],"release_date":"1999-05-13","revenue":363889678,"runtime":124,"spoken_languages":[{"english_name":"Spanish","iso_639_1":"es","name":"Español"},{"english_name":"English","iso_639_1":"en","name":"English"}],"status":"Released","tagline":"Can the most famous film star in the world fall for the man on the street?","title":"Notting Hill","video":false,"vote_average":7.2,"vote_count":4465}
    
    insertData("favorites", movieJSON1)
    insertData("favorites", movieJSON2)
    console.log("movies added to db");
    
    return(
        <View>
            <Image height={160} width={120} backgroundColor='#601010' />
        </View>
    )
}
export default Favorites

//CRUD
//exécuter ces méthodes dans un useEffect (pcq taches asynch)
const createMovieTable = ()=> {
    db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS "
            +"favorites "
            +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, movie TEXT);"
        )
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS "
            +"last_seen "
            +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, movie TEXT);"
        )
    })
}
const insertData = async (tabName, data) => {
    if(data == null) {
        alert("Problem with the JSON data - null ")
    } else {
        const stringifiedData = JSON.stringify(data)
        try{
            await db.transaction(async(tx) => {
                await tx.executeSql(
                    "INSERT INTO "+tabName+"(movie) VALUES ("+stringifiedData+")"
                )
                console.log(stringifiedData);
            })
        } catch (error){console.log("when adding movie: "+error);}
    }
}

// parcourt la table et renvoie les films sous forme de liste d'objets JSON
const readTable = (tabName) => {
    const movieList = [];
    try {
        db.transaction((tx)=>{
            tx.executeSql(
                "SELECT movie FROM "+tabName,[],
                (tx,results)=>{
                    let tabLength = results.rows.length;
                    if(tabLength>0){
                        movieList.push(JSON.parse(results.rows.item(0)))
                    }
                }
            )
        })
    } catch (error) {
        console.log("when reading db: "+error);
    }
    return movieList;
};

const deleteFromFavTab = (id) => {
    try {
        db.transaction((tx)=>{
            tx.executeSql(
                "DELETE FROM favorites WHERE id = "+id,
            )
        })
    } catch (error) {
        console.log(error);
    }
}