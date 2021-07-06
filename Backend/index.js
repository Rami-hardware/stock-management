//all the reqires
const express = require("express");
const mysql = require("mysql2");
const database = require("./database");
const dataT = require("./dataTransfer");
const app = express();
//save & show all records & Oracle DB connction
database.connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
database.connection.connect(function (err) {
  if (err) throw err;
  database.connection.query(
    "select   * from items",
    function (err, result, fields) {
      if (err) throw err;
      dataT.save("records.json" , result)
    }
  );
});

//passing JSON File to Vue
app.get("/", (req, res) => {
  console.log("Records has been send");
  res.json(dataT.load("records.json"));
});

app.listen(5050, ()=>{
    console.log('listing at 5050')
})