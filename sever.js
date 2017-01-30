const express=require("express");
const hbs=require("hbs");
const port=process.env.PORT || 3000
hbs.registerHelper("date",()=>{
  return new Date().getFullYear();
})
hbs.registerPartials(__dirname+"/views/partials")
var app=express();
app.set("view engine","hbs")
app.get("/",(req,res)=>{
  res.render("home.hbs");
})
app.get("/about",(req,res)=>{
  res.render("about.hbs",{
    message:"About page"
  });
})
app.listen(port,()=>{
  console.log("Starting Server");
})
