const {createUser, getUsers} = require("./repository");

exports.usersController = async (req, res) => {
    if (req.method === 'POST') {
        await createUser('Alena')
        res.write(JSON.stringify({success: true}))
        res.end();
    } else {
        //JSON.stringify стеарелизация -- превращение в строку
        // res.write(JSON.stringify(getUsers()))
        let users = await getUsers()
        res.write(JSON.stringify(users))
        res.end();
    }
}