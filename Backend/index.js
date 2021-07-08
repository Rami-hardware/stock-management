//all the reqires
const express = require("express");
const database = require("./database");
const dataT = require("./dataTransfer");
const cors = require("cors")
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
//save & show all records & Oracle DB connction
database.con()
//passing JSON File to Vue
app.get("/", (req, res) => {
  console.log("Records has been send");
  res.json(dataT.load("records.json"));
});
app.post('/add',(req, res) => {
  let id = req.body.id
  let category = req.body.category
  let description = req.body.description
  console.log("data has been added")
  res.json(database.add());
})
app.post('/move' , (req,res) =>{
  let to = req.body.to;
  let from = req.body.from;
  let id = req.body.SID
  res.json(database.move(id,from,to))
})
app.listen(5050, ()=>{
    console.log('listing at 5050')
})