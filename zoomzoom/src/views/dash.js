import React from 'react';
import Entry from '../components/entry';
import { connect } from 'react-redux';


const Dash = (props)=>{
  console.log("props in dash", props.entry)
  return (
    <div>
    <Entry />
    </div>
  )
}

const mapStateToProps = (state)=>({
  entry: state.entry,
  register: state.register,
  cashinflow: state.cashinflow
});


 export default connect(mapStateToProps)(Dash);
