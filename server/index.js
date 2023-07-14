const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const cookieParser=require("cookie-parser");
require("dotenv").config();
const User=require("./models/user");

const app=express();
app.use(express.json());
app.use(cors({
    origin:["http://localhost:5173"],
    methods:['GET','POST'],
    credentials:true
}));
app.use(cookieParser());




MONGODB_URL=process.env.MONGODB_URL;

// Connect to MongoDB Atlas database
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Error connecting to MongoDB Atlas', err));

app.post("/register", (req, res)=>{
    const {name, email, password}=req.body;
    bcrypt.hash(password, 10)
    .then(hash=> {
        User.create({name , email, password:hash})
    .then(user => res.json("Success"))
    .catch(err=> res.json(err))
}).catch(err => res.json(err))
})

app.post("/login", (req, res)=>{
    const {email, password}=req.body;
    User.findOne({email:email})
    .then(user => {
            if(user){
                bcrypt.compare(password, user.password, (err, response) =>
                {
                    if(response){
                      const token = jwt.sign({email: user.email, role:user.role},"jwt-secrete-key",{expiresIn:'1d'});
                      res.cookie('token',token);
                      return res.json("Success")
                    }else{
                        return res.json("The Password is incorrect");
                    }
                })
            }else{
               return res.json("NO Account is Found!");
            }
        })
        })





app.listen(3001, ()=>{
    console.log("Server is Running Successfully!");
});