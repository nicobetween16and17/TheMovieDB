import React from 'react';
import SQLite, { openDatabase } from 'react-native-sqlite-storage';

const openDb = () => {
    const db = SQLite.openDatabase({ 
        name: 'movieDB.db',
        location: 'default',
        createFromLocation: '~www/movieDB.db' 
        },
        () => {console.log("open successful");}, // execute if success
        error => {console.log(error)} // execute if error
        );
    return db;
}

//todo closedb()
const closeDb = (db) => {
    db.close()
    return db
}

//CRUD
//exécuter ces méthodes dans un useEffect (pcq taches asynch)
const createMovieTable = () => {
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
const insertData = async (db,tabName, data) => {
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
const readTable = (db, tabName) => {
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

const deleteFromFavTab = (db, id) => {
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
export default {
    createMovieTable,
    insertData,
    readTable,
    deleteFromFavTab, 
    openDb,
    closeDb
}