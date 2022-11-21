const express =require('express')
// const {bodyparser, urlencoded }= require('express')
const mongoose =require('mongoose')
// const route= require('./route/route')
const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://shyamgupta:.T!8NRrzf6FyMYc@cluster0.dbdyccj.mongodb.net/group41Database?retryWrites=true&w=majority",
{useNewUrlParser : true}
).then(()=>console.log("MongoDB is connected"))
.catch(err =>console.log(err))

// app.use('/',route)
app.listen(process.env.PORT || 3000,function(){
console.log(' Express app running on PORT '+3000 || process.env.PORT )
})

