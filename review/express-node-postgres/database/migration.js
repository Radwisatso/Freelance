const pool = require("./config");


async function migration() {
    try {
        const userTable = `
            create table if not exists "Users" (
        	id serial primary key,
	        name varchar
        );
        `
        const profileTable = `
            create table "Profiles" (
            id serial primary key,
            score integer,
            "UserId" integer references "Users"(id)
        );
        `
        const dropTable = `drop table if exists "Users", "Profiles";`

        await pool.query(dropTable)
        console.log('Successfully drop table Users and Profiles')

        await pool.query(userTable)
        console.log('Users table created')

        await pool.query(profileTable)
        console.log('Profiles table created')
    } catch (error) {
        console.log(error)
    }
}

migration()