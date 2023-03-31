const express=require('express')
const app=express()
var cors = require('cors')
 app.use(express.json());                                         
 app.use(express.urlencoded({ extended: false }));
var mongoose = require('mongoose')
const User=require('./User')
var mongoDB = 'mongodb+srv://irsr560:reddy182560@cluster0.a8frh.mongodb.net/stdDB?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

app.use(cors())
app.post('/submit-student-data', function (req, res) {
   console.log(req.body)
  const user=new User(req.body)
   user.save()
    res.send(' Submitted Successfully!');
   });
app.get('/getdet/:name',(req,res)=>{
   console.log("fdss")
   res.send("recived a request using parms"+req.params.name)
})
app.get('/getdet',(req,res)=>{
   
   res.send("recived a request")
})   
app.listen(5000)