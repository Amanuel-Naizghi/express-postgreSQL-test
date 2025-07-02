const pool = require('./pool');
// This function executes a sql query where all the rows are selected
async function getAllUsernames(){
    const {rows} = await pool.query("SELECT * FROM usernames");
    return rows;
}
// This function executes a sql query for inserting a username into the table
async function insertUsername(username){
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function checkSearchItem(item){
    const query = "SELECT * FROM usernames WHERE username = $1";
    const result = await pool.query(query, [item]);
    return result.rows;
}

async function removeAllUsers(){
    await pool.query("DELETE FROM usernames");
}

module.exports = {
    getAllUsernames,
    insertUsername,
    checkSearchItem,
    removeAllUsers,
}