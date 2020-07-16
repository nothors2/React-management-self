import React from 'react';  
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Customer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleClickOpen = () => {
      this.setState({
          open: true
      });
  }

  handleClose = () => {
      this.setState({
          open: false
      })
  }

  deleteCustomer( ) {
    console.log( "삭제 됩니다.");
    this.props.removeCustomer(this.props.id);
    this.setState({
        open: false
    })
      // const url = '/api/customers/' + id;
      // fetch(url, {
      //     method: 'DELETE'
      // });
      // this.props.stateRefresh();
  }
  render() {  
    return (  
      <div>
        <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>삭제</Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>삭제 경고</DialogTitle>
          <DialogContent>
            선택한 고객 정보가 삭제 됩니다.
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" onClick={(e) => {this.deleteCustomer()}}>삭제</Button>
            <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
} 
export default Customer;