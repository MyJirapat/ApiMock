import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';



const columns = [
  { id: "no", 
  label: "No", 
  minWidth: 170 },

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

/*function createData(Room, Status, PreviousDate, PreviousReading, Current,Usage,Option) {
    return { Room, Status, PreviousDate, PreviousReading, Current,Usage,Option};
  }
  
  const rows = [
    createData('101', 'Inhabitable', '27/04/2021', '3962', '', '96', ''),
    createData('102', 'Inhabitable', '27/04/2021', '3962', '', '96', ''),
    createData('103', 'Habitable',   '27/04/2021', '3962', '', '96', ''),
    createData('104', 'Inhabitable', '27/04/2021', '3962', '', '96', ''),
  ];*/


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
 Htext:{   
 }
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (  
    <Card className={classes.root} variant="outlined">
        <Typography variant="h5" component="h2" className={classes.Htext}>
          {props.Text}
        </Typography>
        
      <Table className={classes.table} aria-label="caption table">
        <caption></caption>
        <TableHead>
          <TableRow>      
          {columns.map((column) => (  
                <TableCell         
                  className={classes.Head}
                  key={column.id} 
                  align={column.align}
                  style={{ minWidth: column.minWidth}}       
                >
                  {column.label}
                </TableCell>
          ))}
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow key>
                <TableCell align="left">{props.room1}</TableCell>
                <TableCell align="left">{props.status1}</TableCell>
                <TableCell align="left">{props.PreviousDate1}</TableCell>
                <TableCell align="left">{props.previousReading1}</TableCell>
                <TableCell align="left">{props.curentReading1}</TableCell>
                <TableCell align="left">{props.usage1}</TableCell>
                <TableCell align="left">{props.option1}</TableCell>
            </TableRow>

            <TableRow key>
                <TableCell align="left">{props.room2}</TableCell>
                <TableCell align="left">{props.status2}</TableCell>
                <TableCell align="left">{props.PreviousDate2}</TableCell>
                <TableCell align="left">{props.previousReading2}</TableCell>
                <TableCell align="left">{props.curentReading2}</TableCell>
                <TableCell align="left">{props.usage2}</TableCell>
                <TableCell align="left">{props.option2}</TableCell>  
            </TableRow>

            <TableRow key>
                <TableCell align="left">{props.room3}</TableCell>
                <TableCell align="left">{props.status3}</TableCell>
                <TableCell align="left">{props.PreviousDate3}</TableCell>
                <TableCell align="left">{props.previousReading3}</TableCell>
                <TableCell align="left">{props.curentReading3}</TableCell>
                <TableCell align="left">{props.usage3}</TableCell>
                <TableCell align="left">{props.option3}</TableCell>
            </TableRow>

            <TableRow key>
                <TableCell align="left">{props.room4}</TableCell>
                <TableCell align="left">{props.status4}</TableCell>
                <TableCell align="left">{props.PreviousDate4}</TableCell>
                <TableCell align="left">{props.previousReading4}</TableCell>
                <TableCell align="left">{props.curentReading4}</TableCell>
                <TableCell align="left">{props.usage4}</TableCell>
                <TableCell align="left">{props.option4}</TableCell>
            </TableRow>


            <TableRow key>
                <TableCell align="left">{props.room5}</TableCell>
                <TableCell align="left">{props.status5}</TableCell>
                <TableCell align="left">{props.PreviousDate5}</TableCell>
                <TableCell align="left">{props.previousReading5}</TableCell>
                <TableCell align="left">{props.curentReading5}</TableCell>
                <TableCell align="left">{props.usage5}</TableCell>
                <TableCell align="left">{props.option5}</TableCell>
            </TableRow>
        
        </TableBody>
      </Table>    
      <CardActions>
        <Button size="small">{props.Btn}</Button>
      </CardActions>
    </Card>
   
  );
}




/*{//rows.map((row) => (
    <TableRow key={row.Room}>
      <TableCell component="th" scope="row"></TableCell>
      <TableCell align="left">{row.Room}</TableCell>
      <TableCell align="left">{row.Status}</TableCell>
      <TableCell align="left">{row.PreviousDate}</TableCell>
      <TableCell align="left">{row.Current}</TableCell>
      <TableCell align="left">{row.Usage}</TableCell>
      <TableCell align="left">{row.Option}</TableCell>


    </TableRow>*/