const express = require("express");
const path = require("path")
const app = express();
const hbs = require("hbs");

const port = process.env.Port || 8000



//public static path 

// console.log(path.join(__dirname,"../public"))
const static = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path= path.join(__dirname,"../templates/partials");

app.use(express.static(static));
hbs.registerPartials(partials_path)
app.set('view engine', 'hbs');

app.set("views",template_path)

//routing  -->syntax = app.get(link,callback)

app.get("/", (req, res) => {
    res.render('index')
})
app.get("/about", (req, res) => {
    res.render('about')
})
app.get("/weather",(req,res)=>{
    res.render('weather')
    })

app.get("/contact", (req, res) => {
    res.render('contact')
})

app.get("*",(req,res)=>{
    res.render('error')
    })


app.listen(port, () => {
    console.log(`Listening ${port} `)
})