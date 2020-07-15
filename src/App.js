import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX:'auto'
  },
  table: {
    minWidth:1080
  }
})

const customers = [
  {
    id: 1,
    name: '홍길동',
    image: 'https://placeimg.com/64/64/',
    age: 19,
    gender: '남',
    job: '대학생'
   },
   {
    id: 2,
    name: '홍길서',
    image: 'https://placeimg.com/64/64/',
    age: 13,
    gender: '남',
    job: '대학생'
   },
   {
    id: 3,
    name: '홍길남',
    image: 'https://placeimg.com/64/64/',
    age: 15,
    gender: '남',
    job: '대학생'
   },
   {
    id: 4,
    name: '홍길북',
    image: 'https://placeimg.com/64/64/',
    age: 15,
    gender: '남',
    job: '대학생'
   }
];
  
const head = [
  'ID','사진','이름','나이','성별','직업'
]
 
class App extends React.Component{
  render() {
    const classes = this.props;
    console.log(classes)
    return(
    <Paper className={classes.root}>
      <Table   className={classes.table}>
        <TableHead>
          <TableRow>
            {
              head.map((data,i) => {
                return (
                  <TableCell key={i}>{data}</TableCell>
                );
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            customers.map((data,i) => {
              return (
                <Customer key={i} customer={data}></Customer>
              );
            })
          }
        </TableBody>
        
      </Table>
      </Paper>
    )
  };
}

export default App; 
