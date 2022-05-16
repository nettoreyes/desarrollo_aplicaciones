import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('personas.db');

export const init = () => {
   const promise = new Promise((resolve, reject) => {
       db.transaction((tx) => {
           tx.executeSql('CREATE TABLE IF NOT EXISTS personas (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, image TEXT)', 
           [], 
           () => { resolve() }, 
           (_, err) => { reject(err) })
       })
   });
    return promise;
}

export const insertPersona = (value, image) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                "INSERT INTO personas (value, image) values (?, ?);",
                [value, image],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })

    return promise;
}

export const getPersonas = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                "SELECT * FROM personas;",
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })

    return promise;
}

export const deletePersona = (id) => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction( tx => {
            console.log(id);
            tx.executeSql(
                "DELETE FROM personas WHERE id = ?",
                [id],
                (_, result) => resolve(result),
                (_,err) => reject(err)
            )
        })
    })
    return promise;
}
