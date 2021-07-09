const express = require("express");
const router = express.Router();
const path=require("path");
const user=require("../Models/user");
const imageModel=require("../Models/loadImages");
const authController=require("../controllers/auth");
const fetchuploadImages=require("../controllers/fetchuploadImages");
const storeFiles=require("../middleware/upload");
let routes_all = (app) => {

    // Navigation to Login Page
    router.get("/", function(req,res) {
        app.use(express.static(__basedir + '/views'));
        res.sendFile(path.join(__basedir +'/views/login.html'));
        //__dirname : It will resolve to your project folder.);
    });

    //Navigation to Signup Page
    router.get("/signup", function(req,res) {
        app.use(express.static(__basedir + '/views'));
        
        res.sendFile(path.join(__basedir +'/views/signup.html'));
        //__dirname : It will resolve to your project folder.);
    });

    //Navigation to Index page if logged in
    router.get("/index", function(req,res) {
        app.use(express.static(__basedir + '/views'));
        if(req.session.loggedin){
            res.sendFile(path.join(__basedir +'/views/index.html'));
        }else{
            console.log("Please Login First");
            res.redirect('/');
        }

        //__dirname : It will resolve to your project folder.);
    });

    //Navigating to cirkewwa page if logged in
    router.get("/funchal", function(req,res) {
        app.use(express.static(__basedir + '/views'));
        if(req.session.loggedin){
                res.sendFile(path.join(__basedir +'/views/funchal.html'));
        }else{
            console.log("Please Login First");
            res.redirect('/');
        }
        //__dirname : It will resolve to your project folder.);
    });

    //Navigating to majjistral page if logged in
    router.get("/lagos", function(req,res) {
        app.use(express.static(__basedir + '/views'));
        if(req.session.loggedin){
            res.sendFile(path.join(__basedir +'/views/lagos.html'));
        }else{
            console.log("Please Login First");
            res.redirect('/');
        }
        //__dirname : It will resolve to your project folder.);
    });


    //Navigating to buskett page if logged in
    router.get("/lisbon", function(req,res) {
        app.use(express.static(__basedir + '/views'));
        if(req.session.loggedin){
            res.sendFile(path.join(__basedir +'/views/lisbon.html'));
        }else{
            console.log("Please Login First");
            res.redirect('/');
        }
        //__dirname : It will resolve to your project folder.);
    });


    //Navigating to dingli page if logged in
    router.get("/ponta_delgada", function(req,res) {
        app.use(express.static(__basedir + '/views'));
        if(req.session.loggedin){
            res.sendFile(path.join(__basedir +'/views/ponta_delgada.html'));
        }else{
            console.log("Please Login First");
            res.redirect('/');
        }
        //__dirname : It will resolve to your project folder.);
    });



    //Navigating to fungus rock page if logged in
    router.get("/portimao", function(req,res) {
        app.use(express.static(__basedir + '/views'));
        if(req.session.loggedin){
            res.sendFile(path.join(__basedir +'/views/portimao.html'));
        }else{
            console.log("Please Login First");
            res.redirect('/');
        }
        //__dirname : It will resolve to your project folder.);
    });


    //Navigating to fungus rock page if logged in
    router.get("/porto", function(req,res) {
        app.use(express.static(__basedir + '/views'));
        if(req.session.loggedin){
            res.sendFile(path.join(__basedir +'/views/porto.html'));
        }else{
            console.log("Please Login First");
            res.redirect('/');
        }
        //__dirname : It will resolve to your project folder.);
    });

    //Navigating to fungus rock page if logged in
    router.get("/logout", function(req,res) {
        app.use(express.static(__basedir + '/views'));
        req.session.destroy();
        res.redirect('/');

        //__dirname : It will resolve to your project folder.);
    });

    router.get("/getdatafunchal",fetchuploadImages.get_funchal);
    router.get("/getdatalagos",fetchuploadImages.get_lagos);
    router.get("/getdatalisbon",fetchuploadImages.get_lisbon);
    router.get("/getdataponta_delgada",fetchuploadImages.get_ponta_delgada);
    router.get("/getdataportimao",fetchuploadImages.get_portimao);
    router.get("/getdataporto",fetchuploadImages.get_porto);



    router.post("/auth",authController.Login);//Login page authentication controller
    router.post("/signup",authController.SignUp); //Signupform data insert
    router.post("/upload",storeFiles.single("file"),fetchuploadImages.postImage);
    return app.use("/", router);
};

module.exports = routes_all;