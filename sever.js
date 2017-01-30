const express=require("express");
const hbs=require("hbs");
hbs.registerHelper("date",()=>{
  return new Date().getFullYear();
})
hbs.registerPartials(__dirname+"/views/partials")
var app=express();
app.set("view engine","hbs")
app.get("/",(req,res)=>{
  res.render("home.hbs");
})
app.listen(3000,()=>{
  console.log("Starting Server");
})
