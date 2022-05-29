const express = require('express')
const router = express.Router()
const User = require('../models/User')


//get users
router.get('/getuser',(req,res) =>{
    User.find()
    .then((User) => res.send(User))
    .catch((err) => console.log(err))
})

//add user
router.post('/adduser', (req,res) =>{
    const {name, age, phone, email} = req.body
    const newContact = new Contact ({
        name, age, phone, email
    })
newContact.save()
.then((User) => res.send(User))
.catch(err => console.log(err))
})
//delete user
router.delete('deleteuser/:_id', (req,res) =>{
    const { _id} = req.params
    User.delete({ _id})
    .then((User) => res.send(User))
    .catch((err) => console.error(err))
})
 
//update user
router.put('/updateuser/:_id', (req,res) =>{
const { _id} = req.params
const {name, age, phone, email} = req.body

User.findByIdAndUpdate ({ _id}, {$set: {name, age, phone, email}})
     .then((User) => res.send(User))
     .catch((err) => console.log(err))
})


module.exports = router

