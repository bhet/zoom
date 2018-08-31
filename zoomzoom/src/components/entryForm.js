import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postEntry } from '../redux/action/extracash_action';


class Entryform extends Component{
  state = {
    extracash: {
      yesterday_cash: '',
      cash_from_bank: '',
      cash_from_atm: '',
      orlandi_valuta: '',
      money_order: '',
      money_gram: '',
      lotto_lottery: '',
      anonymous: ''
    },
    registerreading: {
      sale: '',
      check_cash_commission: ''
    }
  };
  handleSubmit = (event) =>{
    event.preventDefault();
      this.props.postEntry(this.state)

  }
  render(){
    return (
      <div className="container" style={{display: 'flex'}}>
      <Form onSubmit={this.handleSubmit}>
        <div className='row'>
          <div className='col'>
            <h4>Enter Cash Entry of Today</h4>
            <div className="extracash">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Yesterday Cash in $</span>
              <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"
              placeholder="0.00" id="yesterday_cash_field"
              onChange={event=>this.setState({extracash: {...this.state.extracash, yesterday_cash:event.target.value}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Cash from Bank in $</span>
              <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"
              placeholder="0.00" id="cash_from_bank_field"
              onChange={event=>this.setState({extracash: {...this.state.extracash, cash_from_bank: event.target.value}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text"> Cash from ATM in $</span>
              <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"
              placeholder="0.00" id="cash_from_atm_filed"
              onChange={event=>this.setState({extracash:{...this.state.extracash, cash_from_atm: event.target.value}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Orlandi Valuta in $</span>
              <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"
              placeholder="0.00" id="orlandi_valuta_filed"
              onChange={event=>this.setState({extracash:{...this.state.extracash, orlandi_valuta: event.target.value}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Money Order in  $</span>
              <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"
              placeholder="0.00" id="money_order_field"
              onChange={event=>this.setState({extracash:{...this.state.extracash, money_order: event.target.value}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Money Gram in $</span>
              <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"
              placeholder="0.00" id="money_gram_field"
              onChange={event=>this.setState({extracash:{...this.state.extracash, money_gram: event.target.value}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Lotto and Lottery in  $</span>
              <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"
              placeholder="0.00" id="lotto_lottery_field"
              onChange={event=>this.setState({extracash:{...this.state.extracash, lotto_lottery: event.target.value}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Anonymous in $</span>
              <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"
              placeholder="0.00" id="anonymous"
              onChange={event=>this.setState({extracash:{...this.state.extracash, anonymous: event.target.value}})} required/>
              </div>
            </div>
          </div>
          </div>

        <div className='col'>
          <h4>Enter Register Entry of Today</h4>
          <div className="register">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Sale in $</span>
              <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"
              placeholder="0.00" id="sale_field"
              onChange={event=>this.setState({registerreading:{...this.state.registerreading, sale: event.target.value, }})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Check Cash Commission in $</span>
              <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"
              placeholder="0.00" id="cash_from_bank_field"
              onChange={event=>this.setState({registerreading:{...this.state.registerreading, check_cash_commission: event.target.value, }})} required/>
              </div>
            </div>
          </div>
        </div>

        </div>
        <Button type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  postEntry,

}, dispatch);

export default connect(null, mapDispatchToProps)(Entryform);
