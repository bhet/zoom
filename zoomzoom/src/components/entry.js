import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';

class Entry extends Component{

  render(){
    let cashArr = [];
    if(this.props.entry){
      cashArr = this.props.entry.map((item)=>{
        let matchingCashFlow = this.props.cashinflow.filter((cashItem)=> cashItem.extra_cash_id === item.id)
        item.total = matchingCashFlow.length > 0 ? matchingCashFlow[0].cash_total : 'unknown';
        return (
          <tr key={item.id}>
             <th scope="row">{item.created_at.slice(0, 10)}</th>
             <td>{item.yesterday_cash}</td>
             <td>{item.cash_from_bank}</td>
             <td>{item.cash_from_atm}</td>
             <td>{item.orlandi_valuta}</td>
             <td>{item.money_order}</td>
             <td>{item.money_gram}</td>
             <td>{item.lotto_lottery}</td>
             <td>{item.anonymous}</td>
             <td>{item.total}</td>
           </tr>
         );
      })
    }

    let regArr = [];
    if(this.props.register){
      regArr = this.props.register.map((item)=>{
        let matchingCashFlow = this.props.cashinflow.filter((cashItem)=> cashItem.register_reading_id === item.id)
        item.total = matchingCashFlow.length > 0 ? matchingCashFlow[0].register_total : 'unknown';
        return (
          <tr key={item.id}>
            <th scope="row">{item.created_at.slice(0,10)}</th>
            <td>{item.sale}</td>
            <td>{item.check_cash_commission}</td>
            <td>{item.total}</td>
          </tr>
         );
      })
    }

    let totalArr = this.props.cashinflow ? this.props.cashinflow.map((item)=> (
      <tr key={item.id}>
        <th scope="row">{item.created_at.slice(0,10)}</th>
        <td>{item.cash_total}</td>
        <td>{item.register_total}</td>
        <td>{item.total_cash_flow}</td>
      </tr>
    )) : [];
    // let extra_cash = this.props.entry.map(item => <div key={item.id}>{item}</div>)
    // console.log("extra_cash", extra_cash)
    return (
      <div className="container">
        <div className="row">

          <div className="col">
            <h4>Daily Cash inflow Table</h4>
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
               {cashArr}
             </tbody>
           </Table>
         </div>

          <div className="col-3">
            <h4>Daily Register Sale and Commission Info Table</h4>
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
                   {regArr}
                 </tbody>
               </Table>
          </div>
        </div>
        <h4>Daily Total  Cash inflow</h4>
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
                   {totalArr}
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
