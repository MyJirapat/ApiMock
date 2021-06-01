const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    //password: "root999",
    database: "TableHistory",
  });

app.get("/tablehistory", (req, res) => {
    db.query("SELECT * FROM tablehistory", (err, result) => {
        if (err){
            console.log(err);

        }else{
            res.send(result);
        }
    });
});


app.post("/create", (req, res) => {
    const no = req.body.no;
    const buildingname = req.body.buildingname;
    const people = req.body.people;
    const amount = req.body.amount;
    const bill = req.body.bill;
    
    db.query(
      "INSERT INTO tablehistory (no, buildingname,people, amount, bill) VALUES (?,?,?,?,?)",
      [no, buildingname,people, amount, bill ],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });



app.listen('3001',() =>{
  console.log('Server is running on port 3001');
})