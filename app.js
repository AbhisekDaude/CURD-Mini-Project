const express=require('express');
const app=express();
const path=require('path');
const userModel = require("./models/user");

app.set ("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extened:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.render("index");

});

app.get('/read' ,(req, res)=>{
    res.render("read");
})

app.post('/create', async (req,res)=>{

   let {name,email,image}=req.body; // this code is used to put the name email and image enter by the user in body of the web page 

   let createdUser= await userModel.create({  // we create the user 
    name:name,
    email:email,
    image:image
   });

   res.send(createdUser);

})

app.listen(3000,()=>{
    console.log("Server is running bro");
})