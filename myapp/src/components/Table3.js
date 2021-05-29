import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "name", label: "No", minWidth: 170 },

  { id: "code", 
  label: "Buildingname", 
  minWidth: 170,
  

},
  {
    id: "population",
    label: "People",
    minWidth: 170,
   
  },
  {
    id: "size",
    label: "Room",
    minWidth: 170,
    
  },
  {
    id: "density",
    label: "Amount",
    minWidth: 170,
    
  }
];

/*const rows = [
  { title: "ID", field: "id" },
  { title: "Username", field: "username" },
  { title: "Name", field: "buildingname" },
  { title: "Email", field: "email" },
  { title: "Phone", field: "phone" },
  
 
  
];*/

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  },

  Head:{
    backgroundColor: '#8795b6',
    color: '#ffff'
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();

  

  const [data, setData] = useState([]);
 /* const rows = [
    { title: "ID", field: "id" },
    { title: "Username", field: "username" },
    { title: "Name", field: "buildingname" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
    { title: "Web Link", field: "website" }
  ];*/
  useEffect(() => {
    fetch("http://localhost:3001/tablehistory")
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                className={classes.Head}    
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
              {row.no}
              </TableCell>
             
              <TableCell align="left"> {row.buildingname}</TableCell>
              <TableCell align="left">{row.people}</TableCell>
              <TableCell align="left">{row.people}</TableCell>
              <TableCell align="left">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
