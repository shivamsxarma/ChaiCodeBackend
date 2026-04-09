const express = require('express')

const app = express()
app.arguments(express.json())

app.get ("/menu " , (req , res) => res.json ({
    items:['thali','biryani']
}) )

app.post('/order', myFun);
let order = req.body 
const myFun = (req , res) => {
    res.status(200).json({
        status:"received",
        order:req.body
    })
}