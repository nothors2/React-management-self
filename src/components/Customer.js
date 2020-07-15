import React from 'react';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

class Customer extends React.Component{
  render() {
    const customer = this.props.customer;
    const img = this.props.customer.image+this.props.customer.id;
    return ( 
      <TableRow>
      <TableCell >{customer.id}</TableCell>
        <TableCell ><img src={img}/></TableCell>
        <TableCell >{customer.name}</TableCell>
        <TableCell >{customer.age}</TableCell>
        <TableCell >{customer.gender}</TableCell>
        <TableCell >{customer.job}</TableCell>
      </TableRow>
    )
  }
} 
export default Customer;