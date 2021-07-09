const express = require('express');
const sequelize = require("./utils/database");
const User = require("./Models/user");
const routess=require("./routes/routes_all");
const bodyParser=require("body-parser");
const session=require("express-session");
const app = express();

global.__basedir = __dirname;
 
app.use(bodyParser.json())


app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","OPTIONS,POST,GET,PUT,DELETE,PATCH");
    res.setHeader("Access-Control-Allow-Headers","Content-Type,Authorization");
    next();
})


app.use(session({
    secret: '123456cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(express.urlencoded({ extended: true }));
routess(app);


sequelize.sync().then(() => {

    //login mode
    User.findOne({where:{login:true}}).then(user => {
        if(user){
            user.update({login:false},{where:{login:true}});
            return user.save();
        }
    })

}).then(() => {
    app.listen(3000,() => {
        console.log("node running on port : 3000");
    })
}).catch(() => {
    console.log("failed connection")
})
