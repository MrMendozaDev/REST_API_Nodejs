let jwt = require('jsonwebtoken');

const { 
    create_user,
    update_user,
    delete_user,
    select_users
} = require("../models/querySQL")

const new_user = async (req, res) => {
    let data = req.body
    let result = await create_user(data).catch(error => res.status(400).json({"error": 1,"data": error}))
    res.status(200).json({"error": 0, "data": result});
    console.log("IndexServer: ", result)
}

const upd_user = (req, res) => {
    let data = req.body
    jwt.verify(req.token, 'msj123', async (err, auth) => {
        if(err) res.sendStatus(400)
        let result = await update_user(data).catch(error => res.status(400).json({"error": 1,"data": error}))
        res.status(200).json({"error": 0, "result": result});
    })
}

const del_user = (req, res) => {
    let data = req.body
    jwt.verify(req.token, 'msj123', async (err, auth) => {
        if(err) res.sendStatus(400)
        let result = await delete_user(data).catch(error => res.status(400).json({"error": 1,"data": error}))
        res.status(200).json({"error": 0, "result": result});
    })
}

const login = async (req, res) => {
    let data = req.body
    let info = await select_users(data).catch(error => res.status(400).json({"error": 1,"data": error}));

    jwt.sign(info, "msj123", (err, token) => {
        if(err) res.sendStatus(400)
        res.status(200).json({"error": 0, token});
    });
}

const verifyJwt = (req, res, next) => {
    const header = req.headers.autorization

    if(typeof header != 'undefined'){
        let token = header.split(" ")[1]
        req.token = token
        next()
    }else{
        res.sendStatus(400)
    }
}

module.exports = {
    new_user,
    upd_user,
    del_user,
    login,
    verifyJwt
}