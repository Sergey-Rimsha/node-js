// const users = [
//     {id: 1, name: "Sergey"},
//     {id: 2, name: "Sasha"},
//     {id: 3, name: "Igor"},
// ];

const fs = require("fs");
const {readJsonFromFile, writeJsonToFile} = require("./fs-utils");

const getUsers = () => {
    return readJsonFromFile("users.json")
}

const createUser = async (name) => {
    const users = await getUsers();
    users.push({id: 4, name})

    return writeJsonToFile("users.json", users)
}

exports.getUsers = getUsers;
exports.createUser = createUser;