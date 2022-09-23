const {createUser, getUsers} = require("./repository");

const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
})


//settings router endpoint
router.get('/', async (req, res) => {
    let users = await getUsers();
    // query params: /users?search=Name
    if (!!req.query.search) {
        users = users.filter(u => u.name.indexOf(req.query.search) > -1)
    }
    res.send(users)
})

// get user to id
router.get('/:id', async (req, res) => {
    const userId = +req.params.id;
    const users = await getUsers();
    let user = users.find( u => u.id === userId);
    if (user) {
        res.send(user)
    } else {
        res.send(404)
    }
})



router.post('/', async (req, res) => {
    const name = req.body.name;
    await createUser(name)
    res.send({success: true})
})

module.exports = router;


// exports.usersController = async (req, res) => {
//     if (req.method === 'POST') {
//         await createUser('Alena')
//         res.write(JSON.stringify({success: true}))
//         res.end();
//     } else {
//         //JSON.stringify стеарелизация -- превращение в строку
//         // res.write(JSON.stringify(getUsers()))
//         let users = await getUsers()
//         res.write(JSON.stringify(users))
//         res.end();
//     }
// }