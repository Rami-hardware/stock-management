//all the reqires
const express = require("express");
const database = require("./database");
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
  database.connection.connect(function (err) {
    if (err) throw err;
    let query = "select  * from items"
    database.connection.query(query, (err, result,)=>{
        if (err) throw err;
        res.json(result)
      }
    );
  });
});
app.post('/add',(req, res) => {
  let id = req.body.id
  let category = req.body.category
  let description = req.body.description
  console.log("data has been added")
  res.json(database.add(id,category,description));
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