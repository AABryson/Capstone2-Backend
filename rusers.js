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

router.post

module.exports=router

// router.post('./login', (req, res, next){
//     let {usernme, email} = req.body
//     let user =
// })