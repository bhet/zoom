import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Card } from 'reactstrap';

class Entry extends Component{

  render(){
    console.log("Props entry", this.props.entry);
    console.log("Props register", this.props.register);
    console.log("Props total", this.props.cashinflow);

    let extra_cash = this.props.entry.map(item => <div key={item.id}>{item}</div>)
    console.log("extra_cash", extra_cash)
    return (
      <div className="container">
        <div className="row">
          <div className="col">
        <Table bordered style={{overflowX: "scroll"}}>
             <thead>
               <tr>
                 <th>DATE</th>
                 <th>Yesterday_Cash</th>
                 <th>Cash_From_Bank</th>
                 <th>Cash_From_ATM</th>
                 <th>Orlandi_Valuta</th>
                 <th>Money_Order</th>
                 <th>Money_Gram</th>
                 <th>Lotto_Lottery</th>
                 <th>Anonymous</th>
                 <th>Total</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <th scope="row">1</th>
                 <td>Table cell</td>
                 <td>Table cell</td>
                 <td>Table cell</td>
                 <td>Table cell</td>
                 <td>Table cell</td>
                 <td>Table cell</td>
                 <td>Table cell</td>
                 <td>Table cell</td>
                 <td>Table cell</td>
               </tr>
             </tbody>
           </Table>
         </div>

          <div className="col-3">
            <Table bordered>
                 <thead>
                   <tr>
                     <th>DATE</th>
                     <th>Sale</th>
                     <th>Check_Cash_Commission</th>
                     <th>Total</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <th scope="row">1</th>
                     <td>Table cell</td>
                     <td>Table cell</td>
                     <td>Table cell</td>
                   </tr>
                 </tbody>
               </Table>
          </div>
        </div>

          <div className="row">
            <Table bordered>
                 <thead>
                   <tr>
                     <th>DATE</th>
                     <th>Cash_Total</th>
                     <th>Register_Total</th>
                     <th>Total_Cash_in_Flow</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <th scope="row">1</th>
                     <td>Table cell</td>
                     <td>Table cell</td>
                     <td>Table cell</td>
                   </tr>
                 </tbody>
               </Table>
          </div>

      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  entry: state.entry,
  register: state.register,
  cashinflow: state.cashinflow
});

export default connect(mapStateToProps)(Entry);
