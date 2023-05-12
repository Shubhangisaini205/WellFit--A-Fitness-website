const express = require("express")
const UserRouter = express.Router()
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const { UserModel } = require("../models/UserModel");
const { Validator } = require("../middlewares/Vaildator");

UserRouter.post("/register", Validator, async (req, res) => {

    const { name, email, password, gender, age, height, weight, disease } = req.body;
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            const user = new UserModel({ name, email, password: hash, gender, age, height, weight, disease })
            await user.save()
            res.status(200).send({ "msg": "Account created!!" })
        })

    } catch (err) {
        console.log(err);
        res.send(400).send({ "err": err.message })
    }

})


UserRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        let user = await UserModel.findOne({ email })
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ userId: user._id, username: user.name }, "WellFit");
                    res.status(200).send({ "msg": "Login Successfull!!", "token": token, "username": user.name,"userDetails":user})
                } else {
                    res.status(400).send({ "msg": "Email and Password mismatch" })
                }
            })
        }
    } catch (error) {
        console.log(err);
        res.send({ "err": error.message })
    }
})






module.exports = {
    UserRouter
}