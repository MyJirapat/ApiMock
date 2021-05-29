import React from 'react';
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Axios from 'axios';
import Search from './Search';
import Typography from '@material-ui/core/Typography';
import {useState} from 'react'


const columns = [
  {id: 'no', label: 'No' },
  { id: 'buildingname', label: 'Building Name'},
  { id: 'room_no', label: 'Room Number'},

  {
    id: 'people',
    label: 'People No',
   // format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'amount',
    label: 'Total Amount', 
    //format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'bill',
    label: 'Bill At',  
    //format: (value) => value.toLocaleString('en-US'),
  },


  {
    id: 'status',
    label: 'Status',
    //format: (value) => value.toFixed(2),
  },

  {
    id: 'action',
    label: 'Action', 
    //format: (value) => value.toFixed(2),
  },

];




/*function createData(no, buildingname, room_no, people, amount, bill, status, action) {
  return {
    
    no, 
    buildingname, 
    room_no, people, 
    amount, bill, status, action

   };
}*/

/*const rows = [
  //createData('1','King David', '401', 4, 4000, '30/2/21', 'paid' ),
  //createData('3','King David', '403', 4, 4000, '30/2/21', 'Unpaid' ), 
  {title: "No", field: "no"},
  {title: "Name", field: "buildingname"}
  

];*/


/*function createData(props){
  return{}
}*/




                                    


const useStyles = makeStyles({
  root: {
    width: '90%',
    alignItems: 'center',
    display: "inline-block",
    
    
  },
  container: {
    maxHeight: 440,
  },
  
  Head:{
    backgroundColor: '#8795b6',
    color: '#ffff'
  },

  color:{
   font:'white'
  }
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [historylist, sethistorylist] = useState([]);
  const rows = [
    //createData('1','King David', '401', 4, 4000, '30/2/21', 'paid' ),
    //createData('3','King David', '403', 4, 4000, '30/2/21', 'Unpaid' ), 
    
    
  
  ];

  const gethistory = () =>{
    Axios.get('http://localhost:3001/tablehistory').then((response)=>{
    sethistorylist(response.data);
  });

  }


  const hStyle = { color: 'white' };

  return (
     
    <Paper className={classes.root}>  
      <TableContainer className={classes.container}>     
        <Table stickyHeader aria-label="sticky table">

          <TableHead className={classes.font} >
            <TableRow>
              {columns.map((column) => (
                <TableCell  
                  className={classes.Head}    
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>


          {<TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.no];
                   
                    


                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>}
        </Table>
      </TableContainer>     
     
      <TablePagination
         rowsPerPageOptions={[10, 25, 100]}
         component="div"
         count={rows.length}
         rowsPerPage={rowsPerPage}
         page={page}
         onChangePage={handleChangePage}
         onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>

    
   
  );
}







/*{/*columns.map((column) => (
  <TableCell  
    className={classes.Head}
    key={column.id} 
    align={column.align}
    style={{ minWidth: column.minWidth}}
   
    
  >
    {column.label}
  </TableCell>
))}*/




/*<TablePagination
         rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />/*


/*const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },

  {
    id: 'people',
    label: 'People',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];




function createData(name, code, population, size, people) {
  const density = population / size;
  return { name, code, population, size, density, people };
}

const rows = [
  createData('India', 'IN',1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679,),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
]; */


