const pool = require("./config");
const fs = require('fs').promises

async function seeding() {
    try {
        let usersJson = await fs.readFile('./data/users.json', 'utf-8')
        let usersParsed = JSON.parse(usersJson)

        let usersQuery = `insert into "Users" (name) values \n`

        const usersMap = usersParsed.map(user => { // ('Nama orang')
            return `('${user.name}')`
        }).join(", \n")

        usersQuery += usersMap

        await pool.query(usersQuery)
        console.log("Successfully insert Users")
    } catch (error) {
        console.log(error)
    }
}

seeding()