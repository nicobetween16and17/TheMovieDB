import React from 'react';
import SQLite, { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({ 
    name: 'movieDB.db',
    location: 'default',
    createFromLocation: '~www/movieDB.db' 
    },
    () => {console.log("open successful");}, // execute if success
    error => {console.log(error)} // execute if error
    );
//CRUD
//exécuter ces méthodes dans un useEffect (pcq taches asynch)
const createMovieTable = ()=> {
    db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS "
            +"favorites "
            +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, movie TEXT);"
        )
    })
}
const movieJSON = {"adult":false,"backdrop_path":"/rwcEaZghpbt6mV0lRQ9ymz5oM9B.jpg","belongs_to_collection":null,"budget":52000000,"genres":[{"id":18,"name":"Drama"},{"id":80,"name":"Crime"}],"homepage":"","id":640,"imdb_id":"tt0264464","original_language":"en","original_title":"Catch Me If You Can","overview":"A true story about Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars worth of checks as a Pan Am pilot, doctor, and legal prosecutor. An FBI agent makes it his mission to put him behind bars. But Frank not only eludes capture, he revels in the pursuit.","popularity":32.788,"poster_path":"/ctjEj2xM32OvBXCq8zAdK3ZrsAj.jpg","production_companies":[{"id":11084,"logo_path":null,"name":"Parkes/MacDonald Productions","origin_country":""},{"id":367,"logo_path":null,"name":"Kemp Company","origin_country":""},{"id":368,"logo_path":null,"name":"Splendid Pictures","origin_country":""}],"production_countries":[{"iso_3166_1":"US","name":"United States of America"}],"release_date":"2002-12-25","revenue":352114312,"runtime":141,"spoken_languages":[{"english_name":"English","iso_639_1":"en","name":"English"},{"english_name":"French","iso_639_1":"fr","name":"Français"}],"status":"Released","tagline":"The true story of a real fake.","title":"Catch Me If You Can","video":false,"vote_average":7.9,"vote_count":11242}
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
        } catch (error){console.log(error);}
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
        console.log(error);
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


const DbHelper = () => {}
export default DbHelper