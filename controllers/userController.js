const db = require("../db/queries");

async function getUsernames(req,res){
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    const users = ("Usernames: " + usernames.map(user => user.username).join(", "));

    res.render('index',{
        title:"Users",
        users:users
    })
}

async function createUsernameGet(req,res){
    res.render('new',{title:"Create a new user name"});
}

async function createUsernamePost(req,res){
    const {username} = req.body;
    await db.insertUsername(username);
    res.redirect("/");
}

module.exports = {
    getUsernames,
    createUsernameGet,
    createUsernamePost
}