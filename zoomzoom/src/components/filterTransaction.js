import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { filterTransaction } from '../redux/action/extracash_action';


class FilterTransaction extends Component {
  render () {
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="filter-field" className="mr-sm-2">Filter by Date:</Label>
          <Input type="text" name="transaction" id="filter-field"  />
        </FormGroup>
      </Form>
    )
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  filterTransaction
}, dispatch)

export default connect(null, mapDispatchToProps)(FilterTransaction);
