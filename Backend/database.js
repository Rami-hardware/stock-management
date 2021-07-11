//all reqire
const mysql = require('mysql2')
const dataT = require('./dataTransfer')
//create connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: `stock`
  });
//connection
module.exports.con = () =>{ 
  con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
}
//Select query
//add items 
module.exports.add = (id,description,category) =>{
  let query = `insert into items (SID,item_description,category) values ('${id}','${description}', '${category}');`
  con.query(query,(err,result)=>{
      if(err) throw err;
      console.log('data has added', result)
  })
}
//move items
module.exports.move = (id,from,to)=>{
  let query = `update items set from_ = '${from}' , to_ = '${to}' where SID = ${id}`
  con.query(query,(err) =>{
      if(err) throw err
      console.log('item moved')
  })
}
//using mySQL module outside
module.exports.connection = con;