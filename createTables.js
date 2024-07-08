// const db = require('./db')

// let createTables = async () => {
    
//     const createTable = `CREATE TABLE users (
//         username VARCHAR(25) PRIMARY KEY,
//         password TEXT NOT NULL,
//         email TEXT NOT NULL
//             CHECK (position('@' IN email) > 1)
//             )`
//     await db.query(createTable)
// }

// module.exports={createTables}