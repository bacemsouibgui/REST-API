//require express
const express=require("express")
//init express
const app=express()
//require connectDB
const connectDB=require('./config/connectDB')
//Middleware==Parse the data to json
app.use(express.json())
connectDB()

//require the router
const userSchema=require('./routes/route')
app.use("/api/rout",userSchema)


//lunch the server
const port=5000
app.listen(port,(error) =>
error? console.log(error)
: console.log(`the server is running on port ${port}`)
)