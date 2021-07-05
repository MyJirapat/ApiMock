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
  
    
    db.query(
      "INSERT INTO tablehistory (no, buildingname,people, amount) VALUES (?,?,?,?)",
      [no, buildingname,people, amount],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });


/**/ 

 app.put("/update", (req, res) => {
    const id = req.body.id;
    const amount = req.body.wage;
    db.query(
      "UPDATE tablehistory SET amount = ? WHERE id = ?",
      [amount, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });


  app.delete("/delete/:id",(req, res) =>{
    const id = req.params.id;
    db.query("DELETE FROM tablehistory WHERE id = ? ", id,(err, result)=>{
      if (err){
        console.log(err);
      } else{
        res.send(result);
      }
    });

  });



app.listen('3001',() =>{
  console.log('Server is running on port 3001');
})