const Users = require('./musers.js')
// const db = require('../db.js')
const express = require('express')

const router = new express.Router()

router.post('/signup', async (req, res, next) => {
    try {
        // let {username, password, email} = req.body
        let user = await Users.addUser(req.body)
        res.status(201).json({user})
    } catch(err) {
        return next(err)
    }
})

router.post('/login', async (req, res, next) => {
    try {
        const {username, password} = req.body;
        console.log('is username and password in req.boy', req.body)
        if (!password) {
            return res.status(400).send({error: 'Password is required'})
        }
        let user = await Users.userLogin(username, password)
        res.status(201).json({user})
    } catch(err) {
        return next(err)
    }
})

module.exports = router

// router.post('./login', (req, res, next){
//     let {usernme, email} = req.body
//     let user =
// })