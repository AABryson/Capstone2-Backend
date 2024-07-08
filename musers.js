const db = require('./db')
const bcrypt = require('bcrypt')

class Users {

    static async addUser ({username, password, email}) {
        let result = await db.query(`INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING username, email`, 
        [username, password, email])
        const user = result.rows
        console.log('async addUser', user)
        return user
    }

    static async userLogin ({username, password}) {
        let result = db.query(`SELECT username FROM users`)
        let user = result.rows
        let value = bcrypt.compare(password, user.password)
        if(value) {
            return user
            
        } else {
            throw new NotFoundError(`There is no user ${username}`)
        }
    }
}

module.exports = Users
  